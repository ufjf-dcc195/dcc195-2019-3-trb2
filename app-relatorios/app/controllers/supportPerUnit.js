const Moongoose = require('mongoose');
const Attendant = Moongoose.model("Attendant");
const Attendance = Moongoose.model("Attendance");
module.exports = {
    getReport
};

function getReport(req, res, next) {
    if(req.query.idAttendant) {
        let idAttendant = req.query.idAttendant
        let attendant = Attendant.findById(idAttendant)
        let attendances = [Attendance.find({'atendente': attendant.nome})]
        let users = []
        attendances.forEach(attendance => {
            users.push(attendance.usuario)
        });

        res.render('index', {
            titulo: "Relatório",
            usuarios: users,
            atendente: attendant,
            atendimentos: attendances
        });
    
    }
 }