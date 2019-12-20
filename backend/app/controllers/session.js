const configExpress = require('../../config/express')
const { check, validationResult } = require('express-validator')
const moongoose = require('mongoose')
const Attendant = moongoose.model("Attendant");

// TODO: inserir para todas rotas do sistema
const redirectLogin = (req, res, next) => {
    if (req.session.attendantId === undefined) res.send('Go to Login')
    else next()
}

const redirectHome = (req, res, next) => {
    if (req.session.attendantId != undefined) res.send('Go to Home')
    else next()
}

function validarErrosRequisicao(req) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
}

function getAllAttendant(req, res, next) {
    // const adm = new Attendant({
    //     nome: 'douglas1122',
    //     senha: '123'
    // });

    // adm.save(function (err, adm) {
    //     if (err) return console.error(err);
    //     console.dir(adm);
    // });
    Attendant.find(function (err, attendants) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(attendants);
        }
    });
}

function login(req, res, next) {
    validarErrosRequisicao(req)
    const { nome, senha } = req.body
    if (nome && senha) {
        // TODO: melhorar desempenho consulta
        Attendant.find({}, function (err, attendants) {
            if (err) return res.send('Erro')
            let attendant = {}
            attendants.find((it) => { if (it.nome == nome && it.senha == senha) attendant = it })
            if (attendant.nome === nome && attendant.senha === senha) {
                req.session.attendantId = attendant._id
                return res.send('Atendente logado com sucesso!')
            }
            res.send('Login não foi efetuado!')
        })
    }
}

function logout(req, res, next) {
    validarErrosRequisicao(req)
    req.session.destroy(err => {
        if (err) return res.send('Erro. Go to Home')
        res.clearCookie(configExpress.SESS_NAME)
        res.send('Logout efetuado com sucesso!')
    })
}

module.exports = {
    getAllAttendant,
    login,
    logout,
    redirectHome,
    redirectLogin
};