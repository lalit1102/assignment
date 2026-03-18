var express = require('express')
var router = express.Router()

const catModel = require("../models/catModel")

const add = async(req,res)=>{
    let data = await catModel.insertOne(req.body)
    if(data){
        return res.json({
            "msg":"Category save successfully..."
        })
    }
}
const del = async(req,res)=>{
    let id = req.params.id
    let data = await catModel.findByIdAndDelete(id)
    if(data){
        return res.json({
            "msg":"Category deleted successfully.."
        })
    }
}
const disp = async(req,res)=>{
    let data = await catModel.find()
    if(data){
        return res.json({
            "msg":"Category get successfully.",
            "data":data
        })
    }
}  

const edit = async (req,res)=>{
    let id  = req.params.id
    let data = await catModel.findByIdAndUpdate(id,req.body)
    if(data){
        return res.json({
            "msg":"Category updated successfully.."
        })
    }
}

const privateKey = "abc@123"
var jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    let data = req.headers.authorization
    console.log(data)
    if(data !== undefined){
        let token = data.spilt(" ")[1]

        jwt.verify(token,privateKey,(err,data)=>{
            if(err) {
                return res.json({
                    "msg": err
                })
            }
            next()
        })
    } else {
        return res.json({
            "msg":"plz enter token"
        })
    }
}

router.post("/cat/add",verifyToken,add)
router.get("/cat/disp",verifyToken,disp)
router.delete("/cat/del/:id",del)
router.put("/cat/edit/:id",edit)
console.log(typeof router)
module.exports = router