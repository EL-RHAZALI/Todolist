const express = require("express");
const router = express.Router();
const User = require("../Module/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register" , (req , res)=>{
    data = req.body
    const usrr = new User(data)
    cryptpassword = bcrypt.hashSync(data.password , (10))
    usrr.password = cryptpassword
    usrr.save()
    .then((addRegister)=>{
        res.send(addRegister)
    })
    .catch((Err)=>{
        res.send(Err)
    })
})

router.post("/login" , async(req , res)=>{
    data = req.body
    const user = await User.findOne({email:data.email})
    if(!user) {
        res.status(404).send("your email is invalid")
    }
    else {
        validPass = bcrypt.compareSync(data.password , user.password)
        if(!validPass) {
            res.status(404).send("your password is invalid")
        }
        else {
            payload = {
                _id : user.id,
                email : user.email,
                name : user.name
            }
            token = jwt.sign(payload , "123456")
            res.status(200).send({myToken:token})
        }
    }
})

module.exports = router;