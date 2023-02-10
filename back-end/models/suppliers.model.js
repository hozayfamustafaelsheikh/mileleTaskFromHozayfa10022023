module.exports = (sequelize, Sequelize) => {
    const suppliers = sequelize.define("suppliers", {
        name: {
            type: Sequelize.STRING
        },
        deletedAt: {
            type: Sequelize.DATE
        },
    });

    return suppliers;
};