const Moongoose = require('mongoose');
module.exports = {
    index
};

function index(req, res, next) {
    req.session.i = req.session.i || 1;
    req.session.ultimaVisita = new Date();
    res.render("index", {
        titulo: "Bem vindo!",
        i: req.session.i++,
        acesso: req.session.ultimaVisita
    })
}
