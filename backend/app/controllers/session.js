
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

const users = [
    { id: 1, name: 'adm', email: 'adm@email.com', password: 'secret' },
]


module.exports = {
    login,
    logout
};


function login(req, res, next) {
    //redirectHome()
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
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home')
        }
        res.clearCookie(SESS_NAME)
        res.redirect('/login')
    })
}

//TODO: const {userId} = req.session