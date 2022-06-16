var Express=require('express')
var app=Express()
app.get('/hi',(req,res)=>{
    res.send("Hi")
})
app.get('/gm',(req,res)=>{
    res.send("Good Morning")
})
app.get('/hwru',(req,res)=>{
    res.send("How Are You?")
})
app.listen(30000,(req,res)=>{
console.log("server is running")
})