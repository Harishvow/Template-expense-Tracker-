const validator=require('validator');


const validateSignUpData=(req)=>{
    const {name,emailId,password}=req.body
    if(!name){
        throw new Error("name is required")
    }
    if(!emailId){
        throw new Error("email is required")
    }
    if(!password){
        throw new Error("password is required")
    }
}
module.exports={validateSignUpData}