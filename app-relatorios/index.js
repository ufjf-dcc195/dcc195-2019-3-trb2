const express = require("./app/config/express");
const mongoose = require("./app/config/mongoose");

const config = require("./app/config/config");
const db = mongoose();
const app = express();

app.listen(8099);