const knex = require("../database");
const AppError = require("../utils/AppError");

class BiddingsController {
  async index(request, response) {
    const {
      orderBy,
      order,
      page,
      bidding_number,
      observations,
      ...asideFilters
    } = request.query;
    const resultsPerPage = 10;
    const offset = (page - 1) * resultsPerPage || 0;
    const filters = {};

    for (const key in asideFilters) {
      filters[key] = asideFilters[key].split(",");
    }

    try {
      const baseQuery = knex("biddings").where(function () {
        for (const key in filters) {
          if (filters[key][0] !== "") {
            this.whereIn(key, filters[key]);
          }
        }
      });

      if (bidding_number) {
        baseQuery.where("bidding_number", "like", `%${bidding_number}%`);
      }

      if (observations) {
        baseQuery.where("observations", "like", `%${observations}%`);
      }

      const [{ total }] = await baseQuery.clone().count("id as total");

      const totalPages = Math.ceil(total / resultsPerPage);

      const results = await baseQuery
        .clone()
        .select(
          "biddings.id",
          "modalities.name as modality",
          "biddings.bidding_number",
          "bidding_entities.name as bidding_entity",
          "biddings.date",
          "biddings.time",
          "clients.name as client",
          "bidding_status.name as status",
          "biddings.observations",
          "biddings.created_at",
          "biddings.updated_at"
        )
        .innerJoin("modalities", "biddings.modality_id", "modalities.id")
        .innerJoin(
          "bidding_entities",
          "biddings.bidding_entity_id",
          "bidding_entities.id"
        )
        .innerJoin("clients", "biddings.client_id", "clients.id")
        .innerJoin("bidding_status", "biddings.status_id", "bidding_status.id")
        .limit(resultsPerPage)
        .offset(offset)
        .orderBy(orderBy || "biddings.date", order || "ASC");

      response.json({ results, totalPages });
    } catch (error) {
      throw new AppError(`Falha ao consultar os dados: ${error.message}`);
    }
  }

  async create(request, response) {
    try {
      const data = request.body;

      Object.values(data).map((value) => {
        if (!value) {
          throw new AppError("Um ou mais campos estão vazios");
        }
      });

      const { modality_id, bidding_number, bidding_entity_id, client_id } =
        data;

      const alreadyRegistered = await knex("biddings")
        .where({ modality_id })
        .where({ bidding_number })
        .where({ bidding_entity_id })
        .where({ client_id })
        .first();

      if (alreadyRegistered) {
        throw new AppError(
          "Esta licitação já foi cadastrada para este cliente"
        );
      }

      await knex("biddings").insert(data);

      return response.json("Licitação cadastrada com sucesso.").status(201);
    } catch (error) {
      throw new AppError(`Falha ao cadastrar a licitação: ${error.message}`);
    }
  }

  async stats(request, response) {
    try {
      const [{ total }] = await knex("biddings").count("id as total");

      const year = new Date().getFullYear();

      const status = await knex("bidding_status");

      const statusByMonth = {};

      await Promise.all(
        status.map(async ({ name, id }) => {
          const results = {};

          for (let i = 0; i < 11; i++) {
            const startDate = new Date(year, i, 1);
            const endDate = new Date(year, i + 1, 1);
            const month = startDate.toLocaleString("default", {
              month: "long",
            });

            const [{ count }] = await knex("biddings")
              .count("id as count")
              .where("status_id", id)
              .whereBetween("date", [startDate, endDate]);

            results[month] = count;
          }

          const [{ total }] = await knex("biddings")
            .count("id as total")
            .where("status_id", id);

          results["total"] = total;

          statusByMonth[name] = results;
        })
      );

      response.json({ status: statusByMonth, total });
    } catch (error) {
      throw new AppError(`Falha ao consultar os dados: ${error.message}`);
    }
  }
}

module.exports = BiddingsController;
