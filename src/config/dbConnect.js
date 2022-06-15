import Sequelize from "sequelize";

const db = new Sequelize("evaluation", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})

export default db;