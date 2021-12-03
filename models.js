const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    language : [{
        type : String,
    }] ,
    device : [{
        type : String,
    }] ,
    os : [{
        type : String,
    }],
    username : String,
    credit : Number,
    verified : Boolean,
    name : String,
    email : String,
    dob : String,
    gender : String,
    occupation : String,
    occupationDetails : String,
    annualincome : Number,
    state : String,
    city : String,
    country : String,
    testerTasks : [
        {
            isCompleted: Boolean,
            reference: String,
            completedTime: String
        },
    ],
    createdAt : {
        type : Date,
        default : Date.now()
    },
    updatedAt : {
        type : Date
    }
})

module.exports = mongoose.model("tester" , schema);