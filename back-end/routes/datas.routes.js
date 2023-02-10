module.exports = app => {
    const datas = require("../controllers/datas.controller.js");
  
    var router = require("express").Router();
  
    // Create a new datas
    router.post("/", datas.create);
  
    // Retrieve all datas
    router.post("/getAll", datas.findAll);
  
    // Update a datas with id
    router.put("/:id", datas.update);
  
    app.use('/api/datas', router);
  };
  