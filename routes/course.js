const {Router}=require("express");
const courseRouter=Router();
courseRouter.get("/preview",function(req,res){

})
courseRouter.post("/purchase",function(req,res){
    //Demo endpoint only
})
module.exports={
    courseRouter:courseRouter,
}