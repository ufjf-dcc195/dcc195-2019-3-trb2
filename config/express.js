const express = require("express"),swagger = require("swagger-node-express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const config = require("./config");

module.exports = function(){
    const app = express();
    if(process.env.NODE_ENV === "development"){
        app.use(morgan('dev'));
    } else {
        app.use(compression());
    }
    app.use(bodyParser.urlencoded({"extended": true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    const unitsRouter = require('../app/routes/unit');
    const usersRouter = require('../app/routes/user');
    app.use(express.static("./public"))
    app.use('/units', unitsRouter);
    app.use('/users', usersRouter);

    return app;

};