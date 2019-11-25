const Moongoose = require('mongoose');
const User = Moongoose.model("User");
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getByIdUser
};
function createUser(req, res, next) {
    const user = new User(req.body);
    user.save((err) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(user);
        }
    })
}
function updateUser (req, res, next) {
    User.updateOne(req.body._id, req.body, {new: true}, function (err, user) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(user);
        }
    });
}
function deleteUser (req, res, next) {
    User.deleteOne(req.body._id,function (err) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.status(200).send('Usuário excluído com sucesso');
        }
    });
};

function getAllUsers (req, res, next) {
    User.find(function (err, users) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(users);
        }
    });
}


function getByIdUser (req, res, next, id) {
    User.findOne({_id: id}, function (err, user) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            req.user = user;
            next();
        }
    });
};