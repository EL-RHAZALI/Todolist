const mongoose = require("mongoose");

const Todo = mongoose.model("Todo" , {
    text : {
        type : String,
    },
    completed : {
        type : Boolean,
        default : false
    },
    date : {
        type : String,
        default : new Date()
    }
})

module.exports = Todo;