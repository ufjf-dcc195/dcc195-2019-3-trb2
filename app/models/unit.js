const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
    nome: {type:String, required:true},
    pai: {type: Schema.Types.ObjectId, ref:'Unidades'}
});
mongoose.model('Unit', UnitSchema);