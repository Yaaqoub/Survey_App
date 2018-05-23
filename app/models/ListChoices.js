module.exports = function(sequelize, Sequelize) {

    let ListChoices = sequelize.define('listchoices', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        choice_number: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        label: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return ListChoices;
}