const Moongoose = require('mongoose');
let express = require('express');
const router = express.Router();
const Unit = Moongoose.model("Unit");

/**
 * This function comment is parsed by doctrine
 * @route POST /unit/new
 * @group Unidade - Operações sobre a unidade
 * @param {string} name.required - Nome da Unidade
 * @returns {object} 200 - Um objeto JSON com os dados cadastrados
 * @returns {Error}  default - Unexpected error
 */
router.post('/new',function createUnit(req, res, next) {
    const unit = new Unit(req.body);
    unit.save((err) => {
        if (err) {
            next(err);
        } else {
            res.json(unit);
        }
    });
});

module.exports = router;
