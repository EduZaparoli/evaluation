import express from "express";
import PersonController from "../controllers/PersonController.js";

const router = express.Router();

router
    .get("/person", PersonController.showPerson)
    .get("/person/:id", PersonController.showPersonId)
    .post("/person", PersonController.createPerson)
    .put("/person/:id", PersonController.updatePerson)
    .delete("/person/:id", PersonController.deletePerson)

export default router;