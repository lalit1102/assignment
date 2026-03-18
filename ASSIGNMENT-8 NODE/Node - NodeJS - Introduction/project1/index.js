var express = require("express")
var app = express()

var catRoutes = require("./routes/catRoutes")
var subcatRoutes = require("./routes/subcatRoutes")
var apiRoutes = require("./routes/apiRoutes")

const jwt = require("jsonwebtoken")

app.use(express.static("public"))
console.log(__dirname)
app.set("view engine","ejs")

app.use(express.urlencoded({ extended:true }))

const privateKey = "abc@123"

const generateToken = (req,res) => {
  let user = {
    name:"abc",
    email:"abcd@mail.com"
  }

  jwt.sign(user, privateKey, function(err, token){
    if(err){
      return res.json({ msg: "Error generating token" })
    }

    return res.json({
      msg: "token generated successfully.",
      token: token
    })
  })
}

app.get("/",(req,res)=>{
  res.render("index")
})

app.get("/generateToken", generateToken)

app.use("/category",catRoutes)
app.use("/subcategory",subcatRoutes)

app.listen(7999,()=>{
  console.log("running on port 7999")
})