const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

require("./Config/Connection");



const TodoRouter = require("./Router/todo");
const UserRouter = require("./Router/user");
app.use(cors());
app.use("/todo" , TodoRouter);
app.use("/user" , UserRouter);





app.listen(4000 , ()=>{
    console.log("Server is running now");
})