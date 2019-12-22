const express = require("./config/express");
const mongoose = require("./config/mongoose");

const config = require("./config/config");
const db = mongoose();
const app = express();

app.listen(8099);