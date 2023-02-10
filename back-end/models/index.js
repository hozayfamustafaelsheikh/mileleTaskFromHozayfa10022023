const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.colors = require("./colors.model.js")(sequelize, Sequelize);
db.suppliers = require("./suppliers.model.js")(sequelize, Sequelize);
db.wholesellers = require("./wholesellers.model.js")(sequelize, Sequelize);
db.models = require("./models.model.js")(sequelize, Sequelize);
db.sfxes = require("./sfxes.model.js")(sequelize, Sequelize);
db.variants = require("./variants.model.js")(sequelize, Sequelize);
db.datas = require("./datas.model.js")(sequelize, Sequelize);

// relationship between wholesellers and suppliers
db.suppliers.hasMany(db.wholesellers, { as: "wholesellers" });
db.wholesellers.belongsTo(db.suppliers, {
  foreignKey: "supplierId",
  as: "suppliers",
});

// relationship between sfxes and models
db.models.hasMany(db.sfxes, { as: "sfxes" });
db.sfxes.belongsTo(db.models, {
  foreignKey: "modelId",
  as: "models",
});

// relationship between variants and models
db.models.hasMany(db.variants, { as: "variants" });
db.variants.belongsTo(db.models, {
  foreignKey: "modelId",
  as: "models",
});

// relationship between variants and sfxes
db.sfxes.hasMany(db.variants, { as: "variants" });
db.variants.belongsTo(db.sfxes, {
  foreignKey: "sfxId",
  as: "sfxes",
});
//*********** Data Table ***********//
// relationship between datas and suppliers
db.suppliers.hasMany(db.datas, { as: "datas" });
db.datas.belongsTo(db.suppliers, {
  foreignKey: "supplierId",
  as: "suppliers",
});

// relationship between datas and wholesellers
db.wholesellers.hasMany(db.datas, { as: "datas" });
db.datas.belongsTo(db.wholesellers, {
  foreignKey: "wholesellerId",
  as: "wholesellers",
});

// relationship between datas and sfxes
db.sfxes.hasMany(db.datas, { as: "datas" });
db.datas.belongsTo(db.sfxes, {
  foreignKey: "sfxId",
  as: "sfxes",
});

// relationship between datas and models
db.models.hasMany(db.datas, { as: "datas" });
db.datas.belongsTo(db.models, {
  foreignKey: "modelId",
  as: "models",
});

// relationship between datas and variants
db.variants.hasMany(db.datas, { as: "datas" });
db.datas.belongsTo(db.variants, {
  foreignKey: "variantId",
  as: "variants",
});

// relationship between datas and colors
db.colors.hasMany(db.datas, { as: "datas" });
db.datas.belongsTo(db.colors, {
  foreignKey: "colorId",
  as: "colors",
});

module.exports = db;