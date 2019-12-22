const Moongoose = require('mongoose');
const Attendant = Moongoose.model("Attendant");
const Unit = Moongoose.model("Unit");
const User = Moongoose.model("User");
const Attendance = Moongoose.model("Attendance");
module.exports = {
    getReport
};

async function getReport(req, res, next) {
    /* Script para cadastrar dados iniciais */
    /*
    
    const unidade1 = new Unit({
        nome: 'Unidade1'
    });
    unidade1.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });
    
    const unidade2 = new Unit({
        nome: 'Unidade2'
    });
    unidade2.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });
    
    const usuario1 = new User({
        nome: 'João',
        cpf: '11111111111',
        email: 'joao@gmail.com',
        telefone: '32323232',
        unidadePrincipal: unidade1,
        unidadeSecundaria: unidade2,
        realizouCurso: false,
        password: 'joao'
    });
    usuario1.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });

    const usuario2 = new User({
        nome: 'José',
        cpf: '22222222222',
        email: 'jose@gmail.com',
        telefone: '32323232',
        unidadePrincipal: unidade2,
        realizouCurso: true,
        password: 'jose'
    });
    usuario2.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });
    const atendente1 = new Attendant({
        nome: 'Atendente1',
        senha: '123'
    });
    atendente1.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });

    const atendente2 = new Attendant({
        nome: 'Atendente2',
        senha: '321'
    });
    atendente2.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });

    const atendimento1 = new Attendance({
        atendente: atendente1,
        usuario: usuario1,
        atendimentoPorTelefone: true,
        atendimentoPorPcdp: false,
        nivel: 2,
        observacao: 'observação 1'
    });
    atendimento1.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });

    const atendimento2 = new Attendance({
        atendente: atendente1,
        usuario: usuario2,
        atendimentoPorTelefone: false,
        atendimentoPorPcdp: true,
        nivel: 3,
        observacao: 'observação 2'
    });
    atendimento2.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });

    const atendimento3 = new Attendance({
        atendente: atendente2,
        usuario: usuario2,
        atendimentoPorTelefone: false,
        atendimentoPorPcdp: true,
        nivel: 4,
        observacao: 'observação 3'
    });
    atendimento3.save(function (err, adm) {
        if (err) return console.error(err);
        console.dir(adm);
    });

    */

    if(req.params.attendantId) {
        let idAttendant = req.params.attendantId
        let atendenteQuery = Attendant.findOne({ _id: idAttendant })
        const atendente = await atendenteQuery;
        console.log("atendente")
        console.log(atendente)
        let atendimentosQuery = Attendance.find({atendente: atendente._id});
        let atendimentos = await atendimentosQuery;
        console.log("atendimentos")
        console.log(atendimentos)

        var usuarios = []
        for(let atendimento of atendimentos) {
            const userQuery = User.findOne({ _id: atendimento.usuario})
            const user = await userQuery
            usuarios.push(user)
        }
        console.log("user")
        console.log(usuarios[0].nome)
        
        let unidadesPrincipais = []
        let unidadesSecundarias = []
        for (usuario of usuarios) {
            let unitPrincipalQuery = Unit.findOne({ _id: usuario.unidadePrincipal })
            let unitPrincipal = await unitPrincipalQuery
            unidadesPrincipais.push(unitPrincipal)

            let unitSecundariaQuery = Unit.findOne({ _id: usuario.unidadeSecundaria })
            let unitSecundaria = await unitSecundariaQuery
            unidadesSecundarias.push(unitSecundaria)
        }
        
        console.log("unidadesPrincipais")
        console.log(unidadesPrincipais.length)
        console.log("unidadesSecundarias")
        console.log(unidadesSecundarias.length)

        res.render('index', {
            titulo: "Relatório",
            usuarios: usuarios,
            atendente: atendente,
            unidadesPrincipais: unidadesPrincipais,
            unidadesSecundarias: unidadesSecundarias
        });
    }
}