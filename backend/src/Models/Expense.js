const mongoose=require("mongoose");

const UserExpense=new mongoose.Schema({
    Date:{
        type:Date,
        required:true
    },
    Amount:{
        type:Number,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    }

})
module.exports=mongoose.model("UserExpense",UserExpense)