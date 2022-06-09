import Sequelize from "sequelize";
import db from "../config/dbConnect.js";

const department = db.define('department', {
    ID: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    NAME: {type: Sequelize.STRING, allowNull: false},
    ADDRESS: {type: Sequelize.STRING, allowNull: false},
})

export default department;