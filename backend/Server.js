const express=require("express");
const connectDb=require("./src/Config/db")
const routes=require("./src/Routes/routes")

const app=express();
app.use(express.json());

connectDb();

app.use("/",routes)
const port=8090;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})