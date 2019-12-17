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
    require("../app/models/user");
    require("../app/models/unit");
    require("../app/models/attendant");
    require("../app/models/attendance");
    return mongoose;
}