const express = require('express');
const Task = require('../models/task');

const router = new express.Router();

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

    // task.save().then((task) => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400)
    // })
})

router.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({})
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.find({}).then((task) => {
    //     res.status(200).send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const idTask = await Task.findById(_id)
        res.status(200).send(idTask)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.findById(_id).then((task) => {
    //     res.status(200).send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.post('/task/:id', async (req, res) => {
    try {
        const task = Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!task) {
            return res.status(500).send(task)
        }
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/task/:id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(500).send(e)
        }
        res.status(200).send(task)
    } catch {
        res.status(500).send(e)
    }
})




module.exports = router;