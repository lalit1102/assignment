// three types of modules
// 1)core---inbuilt
//2)local---user Defained
//3)third party-----must have download from npm

var http = require("http")

var {add,minus,area} = require("./cals")

 http.createServer((req,res)=>{
  res.write("hello im join to node js")
  res.write("/n addition is " +add(10,20))
  res.write("/n Minus is "+minus(55,30))
  
  res.write("Area: " + area(20));
  
  res.end("end.......")
}).listen("4000",()=>{
  console.log("hello  first time run")
})