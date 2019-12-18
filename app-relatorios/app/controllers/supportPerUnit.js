const Moongoose = require('mongoose');
const Attendant = Moongoose.model("Attendant");
const Unit = Moongoose.model("Unit");
const User = Moongoose.model("User");
const Attendance = Moongoose.model("Attendance");


exports = function getReport(req, res, next) {
    if(req.query.idAttendant) {
        let idAttendant = req.query.idAttendant
        let attendant = Attendant.findById(idAttendant)
        let attendances = [Attendance.find({'atendente': attendant.nome})]
        // let atendente1 = new Attendant
        // atendente1.nome = "jose"
        // atendente1.senha = "123"
        // let atendente2 = new Attendant
        // atendente2.nome = "joao"
        // atendente2.senha = "123"
        // let unidade1 = new Unit
        // unidade1.nome = "unidade 1"
        // let unidade2 = new Unit
        // unidade2.nome = "unidade 2"
        // let usuario1 = new User
        // usuario1.nome = "usuario1"
        // usuario1.cpf = "11111111111"
        // usuario1.telefone = "32323232"
        // usuario1.unidadePrincipal = unidade1
        // let usuario2 = new User
        // usuario2.nome = "usuario2"
        // usuario2.cpf = "22222222222"
        // usuario2.telefone = "32323232"
        // usuario2.unidadePrincipal = unidade1
        // let atendimento1 = new Attendance
        // atendimento1.atendimentoPorTelefone = true
        // atendimento1.atendimentoPorPcdp = true
        // atendimento1.nivel = 1
        // atendimento1.observacao = "asdasd asd as das"
        // atendimento1.atendente = atendente1
        // atendimento1.usuario = usuario1
        // let atendimento2 = new Attendance
        // atendimento2.atendimentoPorTelefone = false
        // atendimento2.atendimentoPorPcdp = true
        // atendimento2.nivel = 3
        // atendimento2.observacao = "asdasd asd as das"
        // atendimento2.atendente = atendente1
        // atendimento2.usuario = usuario2
        // let attendances = [atedimento1, atendente2]
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