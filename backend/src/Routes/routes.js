const {addExpense,totalexpense,allexpense,monthlyexpense,deleteExpense}=require("../Controller/UserExpense")
const Express=require("express");
const router=Express.Router();
const {Limiter,Userauth}=require('../Middleware/auth')


router.post("/addExpense",Userauth,Limiter,addExpense);
router.get("/totalexpense",Userauth,Limiter,totalexpense);
router.get("/allexpense",Userauth,Limiter,allexpense)
router.get("/monthlyexpense",Userauth,Limiter,monthlyexpense)
router.delete("/delExpense/:id",Userauth,Limiter,deleteExpense)

module.exports=router;
