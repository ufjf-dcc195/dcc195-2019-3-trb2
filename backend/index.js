const express = require("./config/express");
const mongoose = require("./config/mongoose");

const config = require("./config/config");
mongoose();
const app = express();

app.listen(process.env.PORT);
console.log(`App running in http://localhost:${process.env.PORT}`)
