const { Router } = require("express");

const ClientsController = require("../controllers/ClientsController");

const clientsRoutes = Router();

const clientsController = new ClientsController();

clientsRoutes.get("/", clientsController.index);

module.exports = clientsRoutes;
