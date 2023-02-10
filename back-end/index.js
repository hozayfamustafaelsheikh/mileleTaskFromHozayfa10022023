const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: ["http://localhost:3000"]
};

app.use(cors(corsOptions));
app.use('/images', express.static('./images'));

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '50mb' }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const db = require("./models");
db.sequelize.sync();


//********************* simple route *********************//
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

require("./routes/suppliers.routes")(app);
require("./routes/models.routes")(app);
require("./routes/colors.routes")(app);
require("./routes/datas.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});