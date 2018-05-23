module.exports = function(sequelize, Sequelize) {

    let List = sequelize.define('list', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        multiple: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return List;
}