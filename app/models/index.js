"use strict";

let fs = require("fs");
let path = require("path");
let Sequelize = require("sequelize");
let env = process.env.NODE_ENV || "development";
let config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];


let sequelize = new Sequelize(config.database, config.username, config.password, config);
let db = {};


fs.readdirSync(__dirname).filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file) {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

/**
 * Tables relations START
 */
//Users Model
db.users.belongsTo(db.roles, {foreignKey: 'role_id'});
db.users.hasMany(db.answers, {foreignKey: 'user_id'});

//Roles Model
db.roles.hasMany(db.users, {foreignKey: 'role_id'});

//Surveys Model
db.surveys.hasMany(db.questions, {foreignKey: 'survey_id'});

//Questions Model
db.questions.belongsTo(db.surveys, {foreignKey: 'survey_id'});
db.questions.hasMany(db.answers, {foreignKey: 'question_id'});
db.questions.belongsTo(db.types, {foreignKey: 'type_id'});

//Answers Model
db.answers.belongsTo(db.questions, {foreignKey: 'question_id'});
db.answers.belongsTo(db.users, {foreignKey: 'user_id'});

//Types Model
db.types.hasMany(db.questions, {foreignKey: 'type_id'});
db.types.belongsToMany(db.params, {through: 'type_param', foreignKey: 'type_id', as:'typeHasParam'});

//Params Model
db.params.belongsToMany(db.types, {through: 'type_param', foreignKey: 'param_id', as:'paramHasType'});

/**
 * Tables relations END
 */

module.exports = db;