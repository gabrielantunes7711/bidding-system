const { Router } = require("express");

const BiddingEntitiesController = require("../controllers/BiddingEntitiesController");

const biddingEntitiesRoutes = Router();

const biddingEntitiesController = new BiddingEntitiesController();

biddingEntitiesRoutes.get("/", biddingEntitiesController.index);

module.exports = biddingEntitiesRoutes;
