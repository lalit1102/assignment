var fs = require("fs")
var http = require("http")

// fs.writeFile("abc.txt","this is file",(err,data)=>{
//   if(err) console.log("file not found......error");
//   console.log("file is created sucessfully...........");
  
  
//  })


// fs.readFile("abc.txt",utf-8,(err,data)=>{
//    if(err) console.log("file not found......error");
//    console.log("file is read...........",data)

// })

// fs.unlink("abc.txt",()=>{
//   console.log("deleted file.....")
// })


// file operation
// 1) create a file
// 2)write a file
// 3)read file
// 4)delete file

// const server =  http.createServer((req,res)=>{

//   fs.readFile("index.html","utf-8",(err,data)=>{
//     if(err) {
      
//     }
//   })

// }).listen("3000")

// folder operation

fs.mkdir("new folder",(err)=>{
  if(err){
    console.log(err);
  } else {
    console.log("folder created sucessfully....");
  }

})
fs.rmdir("new folder",(err)=>{
  if(err){
    console.log(err);
  } else {
    console.log("folder created sucessfully....");
  }
})

fs.writeFile("newFolder/hii.txt","hello how are you",(err)=>{
  if(err){
    console.log(err);
    
  } else {
    console.log("file inside folder created sucessfully");
    
  }
})

fs.rmdir("new folder",(err)=>{
  if(err){
    console.log(err);
  } else {
    console.log("folder created sucessfully....");
  }
})
fs.rm("newFolder",{recursive:true},(err)=>{
  if(err){
    console.log(err);
    
  }else {
    console.log("folder delete all files sucessfully.....");
    
  }
})