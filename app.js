const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/",function(req,res){
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    const add = n1+n2;
    res.send("Addition of "+n1+" add "+n2+" is "+add)
})

app.listen(3000,function(){
    console.log("Server started at port 3000")
})
