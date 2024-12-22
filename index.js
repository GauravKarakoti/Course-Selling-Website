const express=require("express");
const app=express();
app.post("/user/signup",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})
app.post("/user/signin",function(req,res){
    res.json({
        message:"signin endpoint"
    })
})in
app.get("/user/purchases",function(req,res){
    
})
app.get("/courses",function(req,res){
    
})
app.post("/course/purchase",function(req,res){
    //Demo endpoint only
})

app.listen(3000);