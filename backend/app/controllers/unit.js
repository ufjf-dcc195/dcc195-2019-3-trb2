const Moongoose = require('mongoose');
const Unit = Moongoose.model("Unit");
module.exports = {
    createUnit,
    createSubUnits,
    getAllUnits
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

function createSubUnits(req, res, next) {
    let parentUnit;
    Unit.findOne({_id: req.params.unitId}).populate('filhos').exec(function (err,parentUnitFound) {
        if (err) res.status(400).send(err.message);
        parentUnit = parentUnitFound;
    });
    const unit = new Unit(req.body);
    unit.save((err, unitSaved) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            parentUnit.filhos.push(unitSaved._id);
            parentUnit.save(function (err, parentUnitSaved) {
                if (err) res.status(400).send(err.message);
                console.log(parentUnitSaved);
            });
            res.json(unit);
        }
    });
}

function getAllUnits(req, res, next) {
    Unit.find()
        .populate('filhos')
        .exec(function (err, users) {
            if (err) {
                res.status(400).send(err.message);
            } else {
                res.json(users);
            }
        });
}