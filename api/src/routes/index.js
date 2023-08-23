const { Router } = require("express");

const biddingStatusRoutes = require("./biddingStatus.routes");
const modalitiesRoutes = require("./modalities.routes");
const biddingEntitiesRoutes = require("./biddingEntities.routes");
const clientsRoutes = require("./clients.routes");
const biddingsRoutes = require("./biddings.routes");

const routes = Router();

routes.use("/bidding_status", biddingStatusRoutes);
routes.use("/modalities", modalitiesRoutes);
routes.use("/bidding_entities", biddingEntitiesRoutes);
routes.use("/clients", clientsRoutes);
routes.use("/biddings", biddingsRoutes);

module.exports = routes;
