const express=require('express');
const app = express();
app.use(express.json())
//body parameter
app.get('/sumbody',(req,res)=>{
    let {value1,value2}=req.body
    const sumbody=value1+value2
    res.send({sumbody}) 
})
//route parameter
app.post('/postsubroute/:val1/:val2',(req,res)=>{
    const routevalue1=req.params.val1
    const routevalue2=req.params.val2
    const subroute=parseInt(routevalue1)-parseInt(routevalue2)
    res.send({subroute}) 
})
//query parameter
app.post('/postmulquery',(req,res)=>{
    const queryvalue1=req.query.num1
    const queryvalue2=req.query.num2
    const mulquery=parseInt(queryvalue1)*parseInt(queryvalue2)
    res.send({mulquery})
})

//route parameter with division
app.get('/divroute/:val1/:val2',(req,res)=>{
    const routevalue1=req.params.val1
    const routevalue2=req.params.val2
    const divroute=parseInt(routevalue1)/parseInt(routevalue2)
    res.send({divroute}) 
})

//body parameter with power
app.post('/subtractbody',(req,res)=>{
    const {subval1,subval2}=req.body
    const subbody=subval1**subval2
    res.send({subbody})
})

//query parameter with floor division
app.get('/floordivquery',(req,res)=>{
    const queryvalue1=req.query.num1
    const queryvalue2=req.query.num2
    const flquery=parseInt(queryvalue1)%parseInt(queryvalue2)
    console.log(flquery)
    res.send({flquery})
})
app.listen(8000,()=>console.log("Server running on port : 8000"))