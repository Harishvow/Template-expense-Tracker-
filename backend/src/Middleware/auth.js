const UserInfo=require('../Models/user')
const Userauth=async(req,res,next)=>{
    try{
        const authHeader=req.headers['authorization']
        const token=authHeader && authHeader.split(' ')[1]
        if (!token) {
            res.status(401).send("please login")
    }
    const decodetoken=jwt.decode(token)
    if(!decodetoken){
        res.status(401).send("Invalid token")
    }
    const {_id}=decodetoken
    const user=await UserInfo.findById(_id)
    if(!user){
        res.status(401).send("user not found")
    }
    req.user=user
    next()}
    catch(err){
        res.status(401).send({"error":err.message})
    }}