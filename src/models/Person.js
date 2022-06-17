import Sequelize from "sequelize";
import db from "../config/dbConnect.js";

const persons = db.define('person', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: Sequelize.STRING, allowNull: false},
    birth_date: {type: Sequelize.DATE, allowNull: false},
    birth_place: {type: Sequelize.STRING, allowNull: false},
    job: {type: Sequelize.STRING},
    department_id: {type: Sequelize.INTEGER, references: {model: 'department', key: 'id'}}
}, {
    timestamps: false,
    tableName: 'person'
})

persons.sync();

export default persons;