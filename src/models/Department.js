import Sequelize from "sequelize";
import db from "../config/dbConnect.js";

const departments = db.define('department', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: Sequelize.STRING, allowNull: false},
    address: {type: Sequelize.STRING, allowNull: false},
}, {
    timestamps: false,
    tableName: 'department'
})

departments.sync();

export default departments;