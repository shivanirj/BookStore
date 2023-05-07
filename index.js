var express = require('express');
express = require('express');
var app = express();

app.use(express.json());

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("On port 3000")
    }
})