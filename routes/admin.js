const{Router}=require("express");
const jwt=require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}=require("../config");
const adminRouter=Router();
const {adminModel}=require("../db");
const {adminMiddleware}=require("../middleware/admin");
adminRouter.post("/signup",function(req,res)
{
    const {email,password,firstName,lastName}=req.body;
    adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName

    })
    res.json({
        message:"Signup suceeded"
    })
})
adminRouter.post("/signin",async function(req,res)
{
    const {email,password}=req.body;
    const user=await adminModel.findOne({
        email:email,
        password:password
    });
    if (user)
    {
        const token=jwt.sign({
            id:user._id,
        },JWT_ADMIN_PASSWORD);
        res.json({
            token:token
        })
    }
    else
    {
        res.status(403).json({
            message:"Invalid email or password"
        })
    }
})  
adminRouter.post("/course",adminMiddleware,async function(req,res)
{
    const adminId=req.userId;
    const {title,description,imageUrl,price}=req.body;
    const course=await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId
    })
    res.json({
        message:"Course created",
        courseId:course._id
    })
})
adminRouter.put("/course",function(req,res)
{
    res.json({
        message:"course endpoint"
    })
})
adminRouter.get("/course/bulk",function(req,res)
{
    res.json({
        message:"bulk endpoint"
    })
})
module.exports={
    adminRouter:adminRouter
}