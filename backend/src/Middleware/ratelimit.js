const rateLimit=require("express-rate-limit");

export const  limiter=rateLimit({
    windowsMs:15*60*1000,
    max:100,
    standardHeaders:true,
    legacyHeaders:false,
    ipv6Subnet: 56
        
})