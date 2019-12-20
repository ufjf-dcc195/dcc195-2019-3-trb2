const configExpress = require('../../config/express');
const { check, validationResult } = require('express-validator');
const Moongoose = require('mongoose');
const User = Moongoose.model("User");

const redirectLogin = (req, res, next) => {
    if (req.session.userId===undefined) {
        res.send('Go to página Login')
    } else {
        next()
    }
}

const redirectHome = (req, res, next) => {
    if (req.session.userId!=undefined) {
        res.send('Go to página home')
    } else {
        next()
    }
}

module.exports = {
    login,
    logout,
    redirectHome,
    redirectLogin
};


function validarErros(req) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
}

function login(req, res, next) {
    validarErros(req)
    const { name, email, password } = req.body
    if (email && password) {

        // let foundUser =  await User.findOne({"name":name}).lean();
        // console.log(foundUser)

        const email1 = "adm@gmail.com", password1 = "adm";
        if (email1 === email && password1 === password) {
            req.session.userId = "5dfadb4401013416551e91b9"
            return res.send('Usuário logado com sucesso!')
        }
        res.send('Login não foi efetuado!')
    }
}

function logout(req, res, next) {
    console.log(req.session.userId)
    validarErros(req)
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home')
        }
        res.clearCookie(configExpress.SESS_NAME)
        res.send('Logout efetuado com sucesso!')
    })
}
