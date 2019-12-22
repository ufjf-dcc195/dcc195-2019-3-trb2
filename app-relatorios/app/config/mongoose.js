const config = require("./config");
const mongoose = require("mongoose");
module.exports = function () {
    mongoose.connect(config.db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    );
    mongoose.Promise = global.Promise;
    require("../models/user");
    require("../models/unit");
    require("../models/attendant");
    require("../models/attendance");
    return mongoose;
}