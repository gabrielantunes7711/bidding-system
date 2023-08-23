const { Router } = require("express");

const BiddingsController = require("../controllers/BiddingsController");

const biddingsRoutes = Router();

const biddingsController = new BiddingsController();

biddingsRoutes.post("/", biddingsController.create);
biddingsRoutes.get("/", biddingsController.index);
biddingsRoutes.get("/stats", biddingsController.stats);

module.exports = biddingsRoutes;
