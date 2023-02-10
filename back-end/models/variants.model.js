module.exports = (sequelize, Sequelize) => {
    const variants = sequelize.define("variants", {
        name: {
            type: Sequelize.STRING
        },
        deletedAt: {
            type: Sequelize.DATE
        },
    });

    return variants;
};