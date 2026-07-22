const UserExpense=require("../Models/Expense")
const dayjs=require("dayjs")

exports.addExpense=async(req,res)=>{
    const date=req.body.Date;
    const amount=req.body.amount;
    const description=req.body.description;

    const UserExpenseData=new UserExpense({
        Date:date,
        Amount:amount,
        Description:description
    })
    await UserExpenseData.save();
    res.send("Expense Added Successfully")


}
exports.totalexpense=async(req,res)=>{
    const  response=await UserExpense.aggregate([
        {
            $group:{
                _id:null,
                total:{$sum:"$Amount"}
            }
        }
    ])
    const total=response.length ? response[0].total:0
    res.send({total:total})
}
exports.allexpense=async(req,res)=>{
    const all=await UserExpense.find({},"Amount"

    )
    res.send(all)
}
exports.monthlyexpense=async(req,res)=>{
    const month= req.body.month;
    const start=dayjs(`${month} 2026`).startOf('month').toDate();
    const end=dayjs(`${month} 2026`).add(1, "month").startOf("month").toDate();
    try{
    const monthly= await UserExpense.find({
            Date:{
                $gte:start,
                $lt:end
            }},
    {
        Amount: 1,
        _id: 0
    });
    console.log(monthly)

    res.json(monthly);
}    
    catch(err){
        res.send(`Nothing Expense Found in the ${month}`)

    }}
exports.deleteExpense=async(req,res)=>{
    try{
    const {id} =req.params
    const removeitem=await UserExpense.findOneAndDelete({_id:id})
    console.log(removeitem)
    
        if (!removeitem){
        res.send("Expense not found")
    }
    else{
        res.send("Expense Deleted Successfully")
    }
    
}
    catch(err){
        res.send(`Error: ${err.message}`)
    }


}