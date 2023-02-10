module.exports = app => {
    const models = require("../controllers/models.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all models
    router.get("/", models.findAll);
  
    app.use('/api/models', router);
  };
  