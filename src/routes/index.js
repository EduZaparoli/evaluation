import express from "express";
import person from "./personRoutes.js";
import department from "./departmentRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "Pagina inicial"});
    })

    app.use(
        express.json(),
        person,
        department
    )
}

export default routes;