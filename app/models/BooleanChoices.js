module.exports = function(sequelize, Sequelize) {

    let BooleanChoices = sequelize.define('booleanchoices', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        choice_id: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        choice_label: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return BooleanChoices;
}