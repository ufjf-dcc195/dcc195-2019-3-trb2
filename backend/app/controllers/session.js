const configExpress = require('../../config/express');
const { check, validationResult } = require('express-validator');
const moongoose = require('mongoose');
const Attendant = moongoose.model("Attendant");

// TODO: inserir para todas rotas do sistema
const redirectLogin = (req, res, next) => {
    if (req.session.attendantId === undefined) res.send('Go to Login');
    else next()
};

const redirectHome = (req, res, next) => {
    if (req.session.attendantId != undefined) res.send('Go to Home');
    else next()
};

function validarErrosRequisicao(req) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
}

function login(req, res, next) {
    validarErrosRequisicao(req);
    const { email, password } = req.body;
    if (email && password) {
        // TODO: melhorar desempenho consulta
        Attendant.find({}, function (err, attendants) {
            if (err) return res.send('Erro');
            let attendant = {};
            attendants.find((it) => { if (it.email === email && it.senha === password) attendant = it });
            if (attendant.email === email && attendant.senha === password) {
                req.session.attendantId = attendant._id;
                return res.status(200).send('Atendente logado com sucesso!')
            }
            res.status(400).send('Login não foi efetuado!')
        })
    }
}

function logout(req, res, next) {
    validarErrosRequisicao(req);
    req.session.destroy(err => {
        if (err) return res.send('Erro. Go to Home');
        res.clearCookie(configExpress.SESS_NAME);
        res.status(200).send('Logout efetuado com sucesso!')
    })
}

module.exports = {
    login,
    logout,
    redirectHome,
    redirectLogin
};