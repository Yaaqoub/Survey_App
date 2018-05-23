module.exports = function(sequelize, Sequelize) {

    let Booleans = sequelize.define('booleans', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }
    },{
        underscored: true
    });

    return Booleans;
}