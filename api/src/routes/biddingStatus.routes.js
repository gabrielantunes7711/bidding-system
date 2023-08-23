const { Router } = require("express");

const BiddingStatusController = require("../controllers/BiddingStatusController");

const biddingStatusRoutes = Router();

const biddingStatusController = new BiddingStatusController();

biddingStatusRoutes.get("/", biddingStatusController.index);

module.exports = biddingStatusRoutes;
