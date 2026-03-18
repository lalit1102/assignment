var express = require("express")
  var app = express()

  app.get("/",(req,res)=>{
    res.send("express example 123")
  })

  app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
  })

  app.listen("4000",()=>{
    console.log("port running");
    
  })
