module.exports = (sequelize, Sequelize) => {
    const datas = sequelize.define("datas", {
        Jan: {
            type: Sequelize.STRING
        },
        Feb: {
            type: Sequelize.STRING
        },
        Mar: {
            type: Sequelize.STRING
        },
        Apr: {
            type: Sequelize.STRING
        },
        May: {
            type: Sequelize.STRING
        },
        Jun: {
            type: Sequelize.STRING
        },
        Jul: {
            type: Sequelize.STRING
        },
        Aug: {
            type: Sequelize.STRING
        },
        Sep: {
            type: Sequelize.STRING
        },
        Oct: {
            type: Sequelize.STRING
        },
        Nov: {
            type: Sequelize.STRING
        },
        Dec: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        },
        steeringType: {
            type: Sequelize.STRING
        },
        deletedAt: {
            type: Sequelize.DATE
        },
    });

    return datas;
};