const knex = require("../database");
const AppError = require("../utils/AppError");

class BiddingEntitiesController {
  async index(request, response) {
    try {
      const biddingEntities = await knex("bidding_entities").orderBy("name");

      response.json(biddingEntities);
    } catch (error) {
      throw new AppError(`Falha ao consultar os dados: ${error.message}`);
    }
  }
}

module.exports = BiddingEntitiesController;
