const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendantSchema = new Schema({
    name: {type:String, required:true},
    senha: [{type: String, required:true}]
});

mongoose.model('Attendant', AttendantSchema);