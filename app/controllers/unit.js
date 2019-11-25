
const Moongoose = require('mongoose');
const Unit = Moongoose.model("Unit");
module.exports = {
    createUnit
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