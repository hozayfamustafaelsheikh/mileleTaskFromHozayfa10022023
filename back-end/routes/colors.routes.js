module.exports = app => {
    const colors = require("../controllers/colors.controller.js");
  
    var router = require("express").Router();
    
    // Retrieve all colors
    router.get("/", colors.findAll);
  
    app.use('/api/colors', router);
  };
  