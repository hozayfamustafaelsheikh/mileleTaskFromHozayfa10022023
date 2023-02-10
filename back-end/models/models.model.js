module.exports = (sequelize, Sequelize) => {
    const models = sequelize.define("models", {
        name: {
            type: Sequelize.STRING
        },
        deletedAt: {
            type: Sequelize.DATE
        },
    });

    return models;
};