module.exports = (sequelize, Sequelize) => {
    const wholesellers = sequelize.define("wholesellers", {
        name: {
            type: Sequelize.STRING
        },
        deletedAt: {
            type: Sequelize.DATE
        },
    });

    return wholesellers;
};