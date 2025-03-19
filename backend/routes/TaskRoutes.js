const express = require("express");
const router = express.Router();
const Task = require("../models/Task");


router.post("/" , async(req,res) => {
    const {task} = req.body;
    const newTask = new Task ({task , completed:false});
    await newTask.save();
    res.json(newTask);
});



router.get("/" , async(req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
});



module.exports = router;