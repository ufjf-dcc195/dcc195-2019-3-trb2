const Moongoose = require('mongoose');
const Unit = Moongoose.model("Unit");
module.exports = {
    createUnit,
    getAllUnits,
    getAllUnitsOrderByName
};

function createUnit(req, res, next) {
    const unit = new Unit(req.body);
    unit.save((err) => {
        if (err) {
            next(err);
        } else {
            res.json(unit);
        }
    });
}

function getAllUnitsOrderByName(req, res, next) {
    Unit.find()
        .sort('nome')
        .exec(function (err, units) {
            if (err) {
                res.status(400).send(err.message);
            } else {
                res.json(units);
            }
        });
}
function getAllUnits(req, res, next) {
    Unit.find()
        .populate('pai')
        .exec(function (err, units) {
            if (err) {
                res.status(400).send(err.message);
            } else {
                res.json(units);
            }
        });
}