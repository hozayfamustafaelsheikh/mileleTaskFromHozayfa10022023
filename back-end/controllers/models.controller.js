const db = require("../models");
const models = db.models;

// Retrieve all models from the database.
exports.findAll = (req, res) => {
  models.findAll({
    include: [
      {
        model: db.sfxes,
        as: "sfxes",
        include: ["variants"]
      },
    ],
    order: [
      ['id', 'ASC'],
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving models."
      });
    });
};
