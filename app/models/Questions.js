module.exports = function(sequelize, Sequelize) {

    let Questions = sequelize.define('questions', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        question_word: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        description: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        ignore: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },{
        underscored: true
    });

    return Questions;
}