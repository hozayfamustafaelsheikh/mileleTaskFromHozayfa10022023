const db = require("../models");
const colors = db.colors;

// Retrieve all colors from the database.
exports.findAll = (req, res) => {
  colors.findAll({
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
          err.message || "Some error occurred while retrieving colors."
      });
    });
};
