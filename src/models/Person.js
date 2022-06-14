import Sequelize from "sequelize";
import db from "../config/dbConnect.js";

const persons = db.define('person', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: Sequelize.STRING},
    birth_date: {type: Sequelize.DATE},
    birth_place: {type: Sequelize.STRING},
    job: {type: Sequelize.STRING},
    department_id: {type: Sequelize.INTEGER, references: {model: 'department', key: 'id'}}
}, {
    timestamps: false,
    tableName: 'person'
})

export default persons;