const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TodoListApp")
.then(()=>{
    console.log("Mongodb is connected");
})
.catch(()=>{
    console.log("Mongodb is not connected");
})

module.exports = mongoose;