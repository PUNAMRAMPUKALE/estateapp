import express from "express";

const router = express.Router()

router.get("/test",(req,res)=>{
    console.log("Router World!");
    
})


router.get("api/posts/",(req,res)=>{
  console.log("Get Request");
  
})

app.use("api/posts/",(req,res)=>{
  console.log("Post Request");
  
})

app.use("api/posts/1234",(req,res)=>{
  console.log("Single post");
  
})


export default router;