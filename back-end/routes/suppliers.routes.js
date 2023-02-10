module.exports = app => {
    const suppliers = require("../controllers/suppliers.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all suppliers
    router.get("/", suppliers.findAll);
  
    app.use('/api/suppliers', router);
  };
  