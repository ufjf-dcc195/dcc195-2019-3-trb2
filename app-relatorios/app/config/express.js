const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const config = require("./config");
const ejs = require('ejs');

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
	app.set('views', './app/views');
	app.set('view engine', 'ejs');
    
    const supportPerUserRouter = require('../routes/supportPerUser');
    const supportPerUnitRouter = require('../routes/supportPerUnit');
    app.use(express.static("./public"))
    app.use('/supportPerUser', supportPerUserRouter);
    app.use('/supportPerUnit', supportPerUnitRouter);
    app.use(express.static('./public'));

    return app;

};