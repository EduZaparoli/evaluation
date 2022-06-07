import Sequelize from "sequelize";

const db = new Sequelize("evaluation", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})

db.authenticate().then(function(){
    console.log("conexão com db realizada com sucesso!")
}).catch(function(){
    console.log("Erro ao conectar com db!")
})

export default db;