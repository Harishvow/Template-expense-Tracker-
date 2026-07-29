const monogose =require('mongoose');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const validator=require('validator')

const UserInfo=new mongose.Schema({
    name:{
        type: String,
        required:true,
        minlength:4,
        maxlength: 20,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
})
UserInfo.methods.getJWT=async function(){
    const user=this;
    const token=jwt.sign({
        _id:user._id
    }, process.env.JWT_SECRET, 
    { expiresIn: '1h' })
    return token;
}
UserInfo.methods.validatePassword=async function(UserPassword){
    const user=this;
    const Passhash=user.password;
    const compare=await bcrypt.compare(UserPassword,Passhash)
    return compare

}

module.exports=monogose.model("UserInfo",UserInfo)