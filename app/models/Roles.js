module.exports = function(sequelize, Sequelize) {

    let Roles = sequelize.define('roles', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        role_name: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return Roles;
}