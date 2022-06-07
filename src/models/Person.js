import Sequelize from "sequelize";
import db from "./config/dbConnect.js";

const person = db.define('person', {
    ID: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    NAME: {type: Sequelize.STRING, allowNull: false},
    BIRTH_DATE: {type: Sequelize.DATE, allowNull: false},
    BIRTH_PLACE: {type: Sequelize.STRING, allowNull: false},
    JOB: {type: Sequelize.STRING},
    DEPARTMENT_ID: {type: Sequelize.INTEGER, foreignkey: true}
})