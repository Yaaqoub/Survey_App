module.exports = function(sequelize, Sequelize) {

    let Users = sequelize.define('users', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        username: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        underscored: true
    });

    return Users;
}