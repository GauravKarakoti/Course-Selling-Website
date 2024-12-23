const {Router}=require("express");
const { userRouter } = require("./user");
const courseRouter=Router();
courseRouter.get("/preview",function(req,res){

})
courseRouter.post("/purchase",function(req,res){
    //Demo endpoint only
})
module.exports={
    userRouter:userRouter,
}