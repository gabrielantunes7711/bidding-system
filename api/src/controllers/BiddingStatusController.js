const knex = require("../database");
const AppError = require("../utils/AppError");

class BiddingStatusController {
  async index(request, response) {
    try {
      const BiddingStatus = await knex("bidding_status");

      response.json(BiddingStatus);
    } catch (error) {
      throw new AppError(`Falha ao consultar os dados: ${error.message}`);
    }
  }
}

module.exports = BiddingStatusController;
