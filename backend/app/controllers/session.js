const configExpress = require('../../config/express');
const { check, validationResult } = require('express-validator');

module.exports = {
    login,
    logout
};


const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login')
    } else {
        next()
    }
}

const redirectHome = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/home')
    } else {
        next()
    }
}

function validarErros(req) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
}

function login(req, res, next) {
    //redirectHome()
    // console.log("Login")
    validarErros(req)

    const { email, password } = req.body

    if (email && password) { //TODO: validation

        const user = user.find(
            user => user.email === email && user.password === password //TODO: hash        
        )
        if (user) {
            req.session.userId = user.id
            return res.redirect('/home')
        }

    }
    res.redirect('/login')
}


function logout(req, res, next) {
    //redirectLogin()
    // console.log("Logout")
    validarErros(req)

    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home')
        }
        res.clearCookie(configExpress.SESS_NAME)
        res.redirect('/login')
    })
}

//TODO: const {userId} = req.session