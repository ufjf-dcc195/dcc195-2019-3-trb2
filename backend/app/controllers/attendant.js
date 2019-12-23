const Moongoose = require('mongoose');
const Attendant = Moongoose.model("Attendant");

module.exports = {
    createAttendant,
    updateAttendant,
    deleteAttendant,
    getAllAttendants,
    getAttendantById
};
function createAttendant(req, res, next) {
    const attendant = new Attendant(req.body);
    attendant.save((err) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(attendant);
        }
    })
}
function updateAttendant(req, res, next) {
    Attendant.findOneAndUpdate({ _id: req.params.attendantId }, req.body, { new: true }, function (err, attendant) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(attendant);
        }
    });
}
function deleteAttendant(req, res, next) {
    Attendant.findOneAndRemove({ _id: req.params.attendantId }, function (err) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.status(200).send('Usuário excluído com sucesso');
        }
    });
};

function getAllAttendants(req, res, next) {
    Attendant.find(function (err, attendants) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(attendants);
        }
    });
}


function getAttendantById(req, res, next) {
    Attendant.findOne({ _id: req.params.attendantId }, function (err, attendant) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(attendant)
        }
    });
};