import express from "express";

const router = express.Router();

router
    .get()
    .post("/register", async (req, res) => {
        res.send("Pagina cadastro");
    })
    .put()
    .delete()

export default router;