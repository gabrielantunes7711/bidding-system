const knex = require("../database");
const AppError = require("../utils/AppError");

class ModalitiesController {
  async index(request, response) {
    try {
      const modalities = await knex("modalities").orderBy("name");

      response.json(modalities);
    } catch (error) {
      throw new AppError(`Falha ao consultar os dados: ${error.message}`);
    }
  }
}

module.exports = ModalitiesController;
