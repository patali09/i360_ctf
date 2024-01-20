const http = require("http");
const express = require("express");
const app = express();


app.get("/", (req,res)=>{
    res.sendFile("james.html",{root: __dirname });
})

app.get("/profile/5", (req,res)=>{
        res.status(200).json({name:"James Kettile", age:10, CreditCardNumber:123456789});
})
app.get("/profile/6", (req,res)=>{
    res.status(200).json({name:"I-CES Committee", age:15, CreditCardNumber:5481245487});
})

app.get("/profile/4", (req,res)=>{
    res.status(200).json({name:"Aarati Mahato", age:22, CreditCardNumber:321532181});
})

app.get("/profile/250", (req,res)=>{
    res.status(200).json({name:"i-360{ID0R_CH41133D_S0lve}", age:10, CreditCardNumber:123456789});
})

app.get("/profile/-5", (req,res)=>{
    res.status(200).json({name:"i-360{Negative_ID0R_CH41133_IS_specIAl}", age:10, CreditCardNumber:123456789});
})

app.get("/app", (req,res)=>{
    res.status(200).json({name:"i-360{FUZZ1NG_1S_SH0U1D_B3_D0N3}"});
})

app.get("/contact", (req,res)=>{
    res.set({
        'Flag': 'i-360{ResP0Nc3_H34D3R_AR3_IMP0RTAN7}',
      });
    res.sendFile("contact.html",{root: __dirname });
})
app.post("/submit", (req,res)=>{
    res.status(200).json({message: 'Form submitted successfully'});
})

app.get("/submit", (req,res)=>{
    res.status(200).json({Flag: 'i-360{CH4NG1NG_R3QU3ST_M3TH0D_IS_IMP0R74N7'});
})

http.createServer(app).listen(3000);
