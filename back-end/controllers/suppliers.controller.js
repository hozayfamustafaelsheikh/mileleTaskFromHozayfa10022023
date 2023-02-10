const db = require("../models");
const suppliers = db.suppliers;

// Retrieve all suppliers from the database.
exports.findAll = (req, res) => {
  suppliers.findAll({
    include: ["wholesellers"],
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
          err.message || "Some error occurred while retrieving suppliers."
      });
    });
};