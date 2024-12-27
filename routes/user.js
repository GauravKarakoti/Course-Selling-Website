const {Router}=require("express");
const {userModel,purchaseModel,courseModel}=require("../db");
const {userMiddleware}=require("../middleware/user");
const jwt=require("jsonwebtoken");
const {JWT_USER_PASSWORD}=require("../config");
const userRouter=Router();
userRouter.post("/signup",function(req,res)
{
    const {email,password,firstName,lastName}=req.body;
    userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName

    })
    res.json({
        message:"Signup suceeded"
    })
})
userRouter.post("/signin",async function(req,res)
{
    const {email,password}=req.body;
    const user=await userModel.findOne({
        email:email,
        password:password
    });
    if (user)
    {
        const token=jwt.sign({
            id:user._id,
        },JWT_USER_PASSWORD);
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
userRouter.get("/purchases",userMiddleware,async function(req,res)
{
    const userId=req.userId;
    const purchases=await purchaseModel.find({
        userId:userId
    });
    const courseData=await courseModel.find({
        _id:{$in:purchases.map(x=>x.courseId)}
    });
    res.json({
        purchases,
        courseData
    })
})
module.exports={
    userRouter:userRouter
}