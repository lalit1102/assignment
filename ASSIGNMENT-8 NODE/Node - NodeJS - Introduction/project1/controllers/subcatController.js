const subcatModel = require('../models/subcatModel')
const fs = require("fs")
// import subcatModel from "../models/subcatModel.js"
const insSubcat=async(req,res)=>{
    let id = req.body.subid
    console.log(req.file);
    if(req.file != undefined){
        req.body.image = req.file.filename
        if(id != ""){
            let data = await subcatModel.findById(id)
            if(data.image != ""){
                fs.unlink("public/uploads/" + data.image, (err) => {
                    if(err) console.log("error ==" + err)
                        console.log("image delete")
                })
            }
        }
    }


    if(id!=""){
        let ans = await subcatModel.findByIdAndUpdate(id,req.body)
    } else {

        let ans = await subcatModel.insertOne(req.body)
    }
    res.redirect('/subcategory')
}
const dispSubcat=async(req,res)=>{
    let data = await subcatModel.find()
    res.render("subcategory",{
        "subcatdata":data,
        "editdata":""
    })
}

const delSubcat = async (req,res)=>{
    let id = req.params.id
    let subcatdata = await subcatModel.findById(id)
    if(subcatdata.image !== ""){
        fs.unlink("public/uploads/" + subcatdata.image, (err) => {
            if(err) console.log("error == " + err)
                console.log("image deleted")
        })
    }
    let data = await subcatModel.findByIdAndDelete(id)
    res.redirect("/subcategory")
}

const editSubcat =  async (req,res)=>{
    let id = req.params.id
    
    let editdata = await subcatModel.findById(id)
    let data = await subcatModel.find()
    res.render("subcategory",{
        subcatdata:data,
        editdata:editdata
    })
}

module.exports = {insSubcat,dispSubcat,delSubcat,editSubcat}