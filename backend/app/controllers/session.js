
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

module.exports = {
    login,
};


function login(req, res, next) {
    //redirectHome()
    const { email, password } = req.body

    if (email && password) {

        const user = user.find(
            user => user.email === email && user.password === password //todo: hash        
        )
        if (user) {
            req.session.userId = user.id
            return res.redirect('/home')
        }

    }
    res.redirect('/login')
}
