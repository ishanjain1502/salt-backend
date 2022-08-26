const express = require('express')
const cors = require('cors')
// const morgan = require("morgan");
const db = require('./database/mongo_db')
require("dotenv").config();

const router = require("./routes/api");

const api = require("./routes/api.js");
const app = express();
db();
app.use(cors());

const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use("/api/v1", api);


 
// app.use(morgan('dev'));

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// sndlskdlskndlksdnf

app.use((req, res) => {
  res.status(404).json({
    name: "Salt assignment RESTful API",
    message: "NOT FOUND"
  });
});