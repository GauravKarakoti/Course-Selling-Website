const {Router}=require("express");
const {userMiddleware}=require("../middleware/user");
const { purchaseModel , courseModel} = require("../db");
const courseRouter=Router();
courseRouter.get("/preview",async function(req,res)
{
    const courses=await courseModel.find({});
    res.json({
        courses
    })
})
courseRouter.post("/purchase",userMiddleware,async function(req,res)
{
    //Demo endpoint only
    const userId=req.userId;
    const courseId=req.body.courseId;
    await purchaseModel.create({
        userId:userId,
        courseId:courseId
    });
    res.json({
        message:"You have purchased"
    })
})
module.exports={
    courseRouter:courseRouter,
}