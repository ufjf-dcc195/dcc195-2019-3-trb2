const moongoose = require('mongoose')
const Attendance = moongoose.model("Attendance");

function getAllAttendance(req, res, next) {
    const adm = new Attendance({
        nivel: 1        
    });

    adm.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });

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
        console.log(attendance)
        // let attendant = {}
        // attendants.find((it) => { if (it.nome === nome && it.senha === senha) attendant = it })
        // if (attendant.nome === nome && attendant.senha === senha) {
        //     req.session.attendantId = attendant._id
        //     return res.send('Atendente logado com sucesso!')
        // }
        // res.send('Login não foi efetuado!')
    })
}

module.exports = {
    qtdAtendimentoNivelDuvida,
    getAllAttendance
};