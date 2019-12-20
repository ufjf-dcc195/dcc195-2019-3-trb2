const moongoose = require('mongoose')
const Attendance = moongoose.model("Attendance");

function getAllAttendance(req, res, next) {
    // const adm = new Attendance({
    //     nivel: 30        
    // });

    // adm.save(function (err, adm) {
    //     if (err) return console.error(err);
    //     console.dir(adm);
    // });

    Attendance.find(function (err, attendance) {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(attendance);
        }
    });
}

function qtdAtendimentoNivelDuvida(req, res, next) {
    let cont_1 = cont_2 = cont_3 = cont_4 = cont_5 = 0

    Attendance.find({}, function (err, attendance) {
        if (err) return res.send('Erro')
        attendance.find((it) => {
            if (it.nivel === 1) cont_1++
            if (it.nivel === 2) cont_2++
            if (it.nivel === 3) cont_3++
            if (it.nivel === 4) cont_4++
            if (it.nivel === 5) cont_5++
        })
        res.json({
            titulo: "Quantidade atendimento por nível",
            nivel1: cont_1,
            nivel2: cont_2,
            nivel3: cont_3,
            nivel4: cont_4,
            nivel5: cont_5
        });

    })
}

module.exports = {
    qtdAtendimentoNivelDuvida,
    getAllAttendance
};