const authRouter=require("express").Router();
const UserInfo=require("../Models/user")
const validator = require('validator');
const bcrypt=require("bcrypt")


authRouter.post('/signup',async(req,res)=>{
    try{

        validateSignUpData(req);
        const {name,emailId,password}=req.body;
        const existing=await UserInfo.findOne({emailId:emailId})
        if (existing ){
            res.send({message:"User already exists with this emailId"})
        }
        const PassHashed=await bcrypt.hash(password,10)
        const  user= new User({
            name:name,
            emailId:emailId,
            password:PassHashed
        })
        const SaveUser=await user.save()
        const token=await SaveUser.getJWT()
        res.cookie('token',token,{
            expires: new Date(Date.now() + 1 * 3600000),
            httpOnly:true,
            secure:process.env.NODE_ENV === 'development', 

    })
    res.status(201).json({ data: SaveUser, message: "User added successfully!" });



    }
    catch(err){
        res.status(400).json({error:err.message})
    }

})
authRouter.post('/login',async(req,res)=>{
    try{
        const {emailId,password}=req.body;
        const userexist=await UserInfo.findOne({emailId:emailId})
        if(!userexist){
            res.status(400).json({error:"User does not exist"})
        }
        const passwordvalidate=await userexist.validatePassword(password)
        if(passwordvalidate){
            const token=await userexist.getJWT()
            res.cookie('token',token,{
                expires: new Date(Date.now() + 1 * 3600000),
                httpOnly:true,
                secure:process.env.NODE_ENV === 'development', 
            })
            res.status(200).json({
                token,
                name:userexist.name,
                _id:userexist._id
            })
        }
        else{
            res.status(400).json({error:"Invalid credentials"})
        }
        


    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})
authRouter.post('/logout',async(req,res)=>{
    try{
        res.cookie('token',token,{
            expires:new Date(Date.now()),
            httpOnly:true,
            'sameSite':'strict'
        })
        res.status(200).json({message:"logged out successfully!"})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})