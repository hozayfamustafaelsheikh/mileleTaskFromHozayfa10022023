module.exports = (sequelize, Sequelize) => {
    const colors = sequelize.define("colors", {
        name: {
            type: Sequelize.STRING
        },
        deletedAt: {
            type: Sequelize.DATE
        },
    });

    return colors;
};