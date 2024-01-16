const mongoose = require("mongoose");

const UserR = mongoose.model("UserR" , {
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    }
})

module.exports = UserR;