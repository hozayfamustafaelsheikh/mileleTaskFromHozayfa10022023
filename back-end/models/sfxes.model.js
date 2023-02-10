module.exports = (sequelize, Sequelize) => {
    const sfxes = sequelize.define("sfxes", {
        name: {
            type: Sequelize.STRING
        },
        deletedAt: {
            type: Sequelize.DATE
        },
    });

    return sfxes;
};