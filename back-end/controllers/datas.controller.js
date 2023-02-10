const db = require("../models");
const datas = db.datas;

// Create and Save a new data
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a data
  const data = req.body;

  // Save data in the database
  datas.create(data)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the data."
      });
    });
};

// Retrieve all datas from the database.
exports.findAll = (req, res) => {
  // Create a data
  const data = req.body;
  datas.findAll({
    where: {
      steeringType: data.steeringType,
      supplierId: data.supplierId,
      wholesellerId: data.wholeSellerId,
      sfxId: data.sfxId,
      modelId: data.modelId,
      variantId: data.variantId,
      colorId: data.colorId,
    },
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
          err.message || "Some error occurred while retrieving datas."
      });
    });
};

// Update a data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  datas.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update data with id=${id}. Maybe data was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating data with id=" + id
      });
    });
};
