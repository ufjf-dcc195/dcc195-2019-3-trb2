const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: { type: String, required: true },
    cpf: { type: String },
    telefone: String,
    unidadePrincipal: { type: Schema.Types.ObjectId, ref: 'Unit' },
    unidadeSecundaria: { type: Schema.Types.ObjectId, ref: 'Unit' },
    email: {
        type: String, required: true,
        trim: true, unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    realizouCurso: Boolean,
});
UserSchema.path('cpf').validate(function (cpf) {
    return cpf && cpf.length === 11;
}, 'CPF code must be 11 characters');
mongoose.model('User', UserSchema);


