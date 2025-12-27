import express, { Router } from "express";

const router = Router();

router.get("/login",(req,res)=>{
    res.send("login page")
})
router.get("/logout",(req,res)=>{
    res.send("logout page")
})
router.get("/homepage",(req,res)=>{
    res.send("homepage")
})

export default router;