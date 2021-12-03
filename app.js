require("./db")
const express = require("express");
// const testers = require("./tester.json")
const tester = require("./models")
const app = express();


app.use(express.json())

app.get("/testers" , async(req , res)=>{
    try {
        const data = await tester.find()
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send("error")
    }
})

app.get("/create" , async(req , res)=>{
    try {
        const data = await tester.create({...req.body})
        res.status(200).json(data);
    } catch (error) {
        res.send("error")
    }
})

app.get("/tester" , async(req , res)=>{
    const {gender} = req.query;
    try {
        const data = await tester.find({gender})
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send("error")
    }
})

app.delete("/tester" , async(req , res)=>{
    const {credit} = req.query;
    console.log(credit)
    try {
        const data = await tester.delete({credit})
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send("error")
    }
})

app.put("/tester/testerTasks" , async(req , res)=>{
    const {_id} = req.query;
    try {
        const data = await tester.updateOne({_id} , {$push: {testerTasks: req.body}})
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send("error")
    }
})

app.get("/tester/:id" , async(req , res)=>{
    const {id} = req.params;
    try {
        const data = await tester.find({_id : id})
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send("error")
    }
})

app.get("/task-completed" , async(req , res)=>{
    try {
        const data = await tester.find()
        const completed = data[0].testerTasks.filter(task=>task.isCompleted === true) 
        res.status(200).json(completed)
    } catch (error) {
        res.status(400).send("error")
    }
})

app.put("/tester" , async(req , res)=>{
    const {income} = req.query;
    console.log(income)
    try {
        const data = await tester.updateMany({annualincome : {$gte : income}} , {$push: {testerTasks: req.body}})
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(400).send("error")
    }
})
app.listen(5000 , ()=>{
    console.log("app is listining at port 5000")
})