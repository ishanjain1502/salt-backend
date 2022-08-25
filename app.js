import express from "express";
import cors from "cors";
const morgan = require("morgan");

require("dotenv").config();

import bodyparser from "body-parser";

const api = require("./routes/api.js");
const app = express();

app.use(cors());

app.use(bodyparser.json());


app.use("/api", api);



app.use(morgan('dev'));

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use("/api/v1", router);

app.use("/api/v1", (req, res) => {
  res.status(404).json({ message: "please, specify a valid endpoint." });
});

app.use("/api", (req, res) => {
  res.status(404).json({ message: "please, specify an API version." });
});

app.use((req, res) => {
  res.status(404).json({
    name: "GraySwipe RESTful API",
    version: "1.0.0",
    status: "200: OK",
    health: "RUNNING",
    mode: "STAGING",
  });
});