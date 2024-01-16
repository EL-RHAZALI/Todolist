const express = require("express");
const router = express.Router();
const Todo = require("../Module/Todo");

router.post("/add" , (req , res)=>{
    data = req.body
    const tdl = new Todo(data)
    tdl.save()
    .then((addTodo)=>{
        res.send(addTodo)
    })
    .catch((Err)=>{
        res.send(Err)
    })
})

router.get("/get" , (req , res)=>{
    Todo.find()
    .then((getTodo)=>{
        res.send(getTodo)
    })
    .catch((Err)=>{
        res.send(Err)
    })
})

router.put("/update/:id" , async(req , res)=>{
    myId = req.params.id
    newData = req.body
    const upData =await Todo.findByIdAndUpdate({_id:myId} , newData)
    .then((updateTodo)=>{
        res.send(updateTodo)
    })
    .catch((Err)=>{
        res.send(Err)
    })
})

router.delete("/delete/:id" , async(req , res)=>{
    myId = req.params.id
    const delData = await Todo.findByIdAndDelete({_id:myId})
    .then((deleteTodo)=>{
        res.send(deleteTodo)
    })
    .catch((Err)=>{
        res.send(Err)
    })
})

router.get("/completed/:id" , async (req , res) => {
    myId = req.params.id
    const todo = await Todo.findById({_id:myId})
    todo.completed = !todo.completed
    todo.save()
    res.json(todo)
})

module.exports = router;