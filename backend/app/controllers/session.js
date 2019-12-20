const configExpress = require('../../config/express')
const { check, validationResult } = require('express-validator')
const moongoose = require('mongoose')
const User = moongoose.model("User")

// TODO: inserir para todas rotas do sistema
const redirectLogin = (req, res, next) => {
    if (req.session.userId === undefined) res.send('Go to Login')
    else next()
}

const redirectHome = (req, res, next) => {
    if (req.session.userId != undefined) res.send('Go to Home')
    else next()
}

function validarErrosRequisicao(req) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
}

function login(req, res, next) {
    validarErrosRequisicao(req)
    const { nome, email, password } = req.body
    if (email && password) {
        // TODO: melhorar desempenho consulta
        User.find({}, function (err, users) {
            if (err) return res.send('Erro')
            let user = {}
            users.find((it) => { if (it.email == email) user = it }) // email is unique true
            if (user.nome === nome && user.email === email && user.password === password) {
                req.session.userId = user._id
                return res.send('Usuário logado com sucesso!')
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
    login,
    logout,
    redirectHome,
    redirectLogin
};