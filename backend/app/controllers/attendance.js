const moongoose = require('mongoose')
const Attendance = moongoose.model("Attendance");

function qtdAtendimentoNivelDuvida(req, res, next) {
    let cont_1 = cont_2 = cont_3 = cont_4 = cont_5 = 0

    res.send("hello world")

}

module.exports = {
    qtdAtendimentoNivelDuvida,
};