module.exports = function(sequelize, Sequelize) {

    let Score = sequelize.define('score', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        icon: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        maximum: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return Score;
}