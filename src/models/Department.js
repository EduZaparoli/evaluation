import Sequelize from "sequelize";
import db from "../config/dbConnect.js";

const departments = db.define('department', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: Sequelize.STRING},
    address: {type: Sequelize.STRING},
}, {
    timestamps: false,
    tableName: 'department'
})

export default departments;