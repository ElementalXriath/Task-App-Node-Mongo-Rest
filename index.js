const express = require('express');
require('./src/db/mongoose');

const User = require('./src/models/user');
const Task = require('./src/models/task');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(200).send(users)
    }).catch((e) => {
        res.status(500)
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        res.send(user)
    }).catch((e) => {
        res.status(500)
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then((task) => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((task) => {
        res.status(200).send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;

    Task.findById(_id).then((task) => {
        res.status(200).send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.listen(port, () => {
    console.log(port)
})