const moongoose = require('mongoose')
const Attendance = moongoose.model("Attendance");

function getAllAttendance(req, res, next) {
    // const adm = new Attendance({
    //     nivel: 4,
    //     duvidaFrequente: 2
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

        res.render('qtdNivelDuvida', {
            otima: cont_1,
            boa: cont_2,
            regular: cont_3,
            ruim: cont_4,
            pessima: cont_5
        })

        // código de teste do backend
        // res.json({
        // titulo: "Quantidade atendimento por nível dúvida",
        // otima: cont_1,
        // boa: cont_2,
        // regular: cont_3,
        // ruim: cont_4,
        // pessima: cont_5
        // });
    })
}

function qtdAtendimentoTipoDuvida(req, res, next) {
    let cont_1 = cont_2 = cont_3 = cont_4 = cont_5 = 0

    Attendance.find({}, function (err, attendance) {
        if (err) return res.send('Erro')
        attendance.find((it) => {
            if (it.duvidaFrequente === 1) cont_1++
            if (it.duvidaFrequente === 2) cont_2++
            if (it.duvidaFrequente === 3) cont_3++
            if (it.duvidaFrequente === 4) cont_4++
            if (it.duvidaFrequente === 5) cont_5++
        })

        res.render('qtdNivelTipoDuvida', {
            cadastroPCDP: cont_1,
            legislacao: cont_2,
            relatorios: cont_3,
            prestacaoContas: cont_4,
            alteracaoPCDP: cont_5
        })

        // código de teste do backend
        // res.json({
        //     titulo: "Quantidade atendimento por tipo dúvida frequente",
        //     cadastroPCDP: cont_1,
        //     legislacao: cont_2,
        //     relatorios: cont_3,
        //     prestacaoContas: cont_4,
        //     alteracaoPCDP: cont_5
        // });
    })
}

function createAttendance(req, res, next) {
    const attendance = new Attendance(req.body);
    attendance.save((err) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.json(attendance);
        }
    })
}

module.exports = {
    getAllAttendance,
    qtdAtendimentoNivelDuvida,
    qtdAtendimentoTipoDuvida,
    createAttendance
};