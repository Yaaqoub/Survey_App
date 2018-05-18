module.exports = function(sequelize, Sequelize) {

    let Params = sequelize.define('params', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        param_name: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return Params;
}