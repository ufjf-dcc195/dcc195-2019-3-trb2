const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const config = require("./config");
const ejs = require('ejs');
const handlebars = require('express-handlebars')

module.exports = function () {
    const app = express();
    app.engine('handlebars', handlebars({ defaultLayout: 'index' }))
    app.set('view engine', 'handlebars')

    const SESS_NAME = 'sid'
    const sess = {
        name: SESS_NAME,
        saveUninitialized: false,
        resave: false,
        secret: config.sessionSecret,
        cookie: { maxAge: 6000 }
    }

    if (process.env.NODE_ENV === "development") {
        app.use(morgan('dev'));
    } else {
        app.use(compression());
    }

    app.use(bodyParser.urlencoded({ "extended": true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session(sess));
	// app.set('views', './app/views');
    // app.set('view engine', 'ejs');
    
    const unitsRouter = require('../app/routes/unit');
    const usersRouter = require('../app/routes/user');
    const sessionRouter = require('../app/routes/session');
    const supportPerUnitRouter = require('../app/routes/supportPerUnit');
    const qtdAtendimentoNivelDuvida = require('../app/routes/attendance');

    app.use(express.static("./public"))
    app.use('/units', unitsRouter);
    app.use('/users', usersRouter);
    app.use('/session', sessionRouter);
    app.use('/supportPerUnit', supportPerUnitRouter);
    app.use('/attendance', qtdAtendimentoNivelDuvida);



    return app;

};