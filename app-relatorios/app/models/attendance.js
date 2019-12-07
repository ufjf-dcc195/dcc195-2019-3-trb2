const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
    atendente: {type: Schema.Types.ObjectId, ref: 'Attendant'},
    usuario: {type: Schema.Types.ObjectId, ref: 'User'},
    atendimentoPorTelefone: Boolean,
    atendimentoPorPcdp: Boolean,
    nivel:  {type: Number, min: 1, max: 5},
    observacao: {type:String, required:false},
});


mongoose.model('Attendance', AttendanceSchema);