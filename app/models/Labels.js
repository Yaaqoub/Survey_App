module.exports = function(sequelize, Sequelize) {

    let Labels = sequelize.define('labels', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        label_number: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        label_name: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return Labels;
}