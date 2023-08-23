const { Router } = require("express");

const ModalitiesController = require("../controllers/ModalitiesController");

const modalitiesRoutes = Router();

const modalitiesController = new ModalitiesController();

modalitiesRoutes.get("/", modalitiesController.index);

module.exports = modalitiesRoutes;
