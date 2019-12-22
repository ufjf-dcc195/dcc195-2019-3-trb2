const Moongoose = require('mongoose');
const Attendant = Moongoose.model("Attendant");
const Attendance = Moongoose.model("Attendance");
const Unit = Moongoose.model("Unit");


exports = function getReport(req, res, next) {
    if(req.query.idAttendant) {
        let idAttendant = req.query.idAttendant
        let attendant = Attendant.findById(idAttendant)
        let attendances = [Attendance.find({'atendente': attendant.nome})]
        let users = []
        attendances.forEach(attendance => {
            users.push(attendance.usuario)
        });
        let units = [Unit.find({}, function(err) {
            if (!err){ 
                process.exit();
            } else {throw err;}
        })];

        res.render('index', {
            titulo: "Relatório",
            usuarios: users,
            atendente: attendant,
            unidades: units
        });
    
    }
 }