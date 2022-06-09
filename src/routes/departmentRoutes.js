import express from "express";
import DepartmentController from "../controllers/DepartmentController.js";

const router = express.Router();

router
    .get("/department", DepartmentController.showDepartment)
    .get("/department/:id", DepartmentController.showDepartmentId)
    .get("/department/:name", DepartmentController.showDepartmentName)
    .get("/department/:address", DepartmentController.showDepartmentAddress)
    .post("/department", DepartmentController.createDepartment)
    .put("/department/:id", DepartmentController.updateDepartment)
    .delete("/department/:id", DepartmentController.deleteDepartment)

export default router;