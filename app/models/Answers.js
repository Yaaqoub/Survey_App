module.exports = function(sequelize, Sequelize) {

    let Answers = sequelize.define('answers', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        answer_word: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    },{
        underscored: true
    });

    return Answers;
}