module.exports = function(sequelize, Sequelize) {

    let Surveys = sequelize.define('surveys', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        survey_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        description: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'inactive'
        }
    },{
        underscored: true
    });

    return Surveys;
}