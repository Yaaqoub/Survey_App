module.exports = function(sequelize, Sequelize) {

    let Attachment = sequelize.define('attachment', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        type: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        src_path: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return Attachment;
}