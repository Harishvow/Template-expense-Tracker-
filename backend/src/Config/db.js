const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config();
async function connectDb(){
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("MogoDB Conected Successfully")
    } 
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
module.exports=connectDb;