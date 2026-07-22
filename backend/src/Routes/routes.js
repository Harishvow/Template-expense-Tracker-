const {addExpense,totalexpense,allexpense,monthlyexpense,deleteExpense}=require("../Controller/UserExpense")
const Express=require("express");
const router=Express.Router();

router.post("/addExpense",addExpense);
router.get("/totalexpense",totalexpense);
router.get("/allexpense",allexpense)
router.get("/monthlyexpense",monthlyexpense)
router.delete("/delExpense/:id",deleteExpense)

module.exports=router;
