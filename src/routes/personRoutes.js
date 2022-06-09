import express from "express";
import PersonController from "../controllers/PersonController.js";

const router = express.Router();

router
    .get("/person", PersonController.showPerson)
    .get("/person/:id", PersonController.showPersonId)
    .get("/person/:name", PersonController.showPersonName)
    .get("/person/:job", PersonController.showPersonJob)
    .post("/person", PersonController.createPerson)
    .put("/person/:id", PersonController.updatePerson)
    .delete("/person/:id", PersonController.deletePerson)

export default router;