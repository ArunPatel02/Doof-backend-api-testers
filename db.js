const mongoose = require("mongoose");

const url = "mongodb+srv://Arunpatel:arun@cluster0.sbxag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("connection successfull")
}).catch((error)=>{
    console.log(error)
})
