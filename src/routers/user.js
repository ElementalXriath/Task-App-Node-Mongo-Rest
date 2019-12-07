const express = require('express');
const User = require('../models/user');

const router = new express.Router();

router.post('/users', async ( req, res) => {

    const user = new User(req.body);

    try {
      await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e)
    }

})

router.get('/users', async (req, res) => {
    
    try {
        const users = await User.find({});
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e)
    }

    // User.find({}).then((users) => {
    //     res.status(200).send(users)
    // }).catch((e) => {
    //     res.status(500)
    // })
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const singleUser =  await User.findById(_id)
        res.status(400).send(singleUser)
    } catch (e) {
        res.status(500).send(e)
    }
    // User.findById(_id).then((user) => {
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500)
    // })
})

router.patch('/users/:id', async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!user){
            return res.status(500).send(e)
        }
        res.status(205).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) {
            return res.status(204).send(user)
        }
        res.status(200).send(user)
    } catch (e) {
        res.send(e)
    }
})



module.exports = router;