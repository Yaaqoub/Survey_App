module.exports = function(sequelize, Sequelize) {

    let Range = sequelize.define('range', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        min: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        max: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return Range;
}