const knex = require("../database");
const AppError = require("../utils/AppError");

class ClientsController {
  async index(request, response) {
    try {
      const clients = await knex("clients").orderBy("name");

      response.json(clients);
    } catch (error) {
      throw new AppError(`Falha ao consultar os dados: ${error.message}`);
    }
  }
}

module.exports = ClientsController;
