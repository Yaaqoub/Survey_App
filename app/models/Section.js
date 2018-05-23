module.exports = function(sequelize, Sequelize) {

    let Section = sequelize.define('section', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }
    },{
        underscored: true
    });

    return Section;
}