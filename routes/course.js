const {Router}=require("express");
const courseRouter=Router();
courseRouter.get("/preview",function(req,res)
{
    res.json({
        message:"preview endpoint"
    })
})
courseRouter.post("/purchase",function(req,res)
{
    //Demo endpoint only
    res.json({
        message:"signin endpoint"
    })
})
module.exports={
    courseRouter:courseRouter,
}