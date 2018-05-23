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
db.questions.hasMany(db.score, {foreignKey: 'question_id'});
db.questions.hasMany(db.range, {foreignKey: 'question_id'});
db.questions.hasMany(db.list, {foreignKey: 'question_id'});
db.questions.hasMany(db.section, {foreignKey: 'question_id'});
db.questions.hasMany(db.booleans, {foreignKey: 'question_id'});

//Answers Model
db.answers.belongsTo(db.questions, {foreignKey: 'question_id'});
db.answers.belongsTo(db.users, {foreignKey: 'user_id'});

//Score Model
db.score.belongsTo(db.questions, {foreignKey: 'question_id'});

//Range Model
db.range.belongsTo(db.questions, {foreignKey: 'question_id'});
db.range.belongsToMany(db.labels, {through: 'range_label', foreignKey: 'range_id', as:'rangeHasLabel'});

//List Model
db.list.belongsTo(db.questions, {foreignKey: 'question_id'});
db.list.belongsToMany(db.listchoices, {through: 'list_listchoices', foreignKey: 'list_id', as:'listHasChoices'});

//Section Model
db.section.belongsTo(db.questions, {foreignKey: 'question_id'});
db.section.belongsTo(db.attachment, {foreignKey: 'attachment_id'});

//Boolean Model
db.booleans.belongsTo(db.questions, {foreignKey: 'question_id'});
db.booleans.belongsToMany(db.booleanchoices, {through: 'boolean_booleanchoices', foreignKey: 'boolean_id', as:'booleanHasChoices'});

//Labels Model
db.labels.belongsToMany(db.range, {through: 'range_label', foreignKey: 'label_id', as:'labelHasRange'});

//List_Choices Model
db.listchoices.belongsToMany(db.list, {through: 'list_listchoices', foreignKey: 'choice_id', as:'choicesHasList'});

//Boolean_Choices Model
db.booleanchoices.belongsToMany(db.booleans, {through: 'boolean_booleanchoices', foreignKey: 'choice_id', as:'choicesHasBoolean'});

//Attachment Model
db.attachment.hasMany(db.section, {foreignKey: 'attachment_id'});

/**
 * Tables relations END
 */

module.exports = db;