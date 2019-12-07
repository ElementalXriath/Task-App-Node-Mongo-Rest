const mongoose = require('mongoose');
var validator = require('validator');
const User = mongoose.model('User', {
    name: {
       type: String,
       required: true,
       trim: true 
    },
    password: {
        type: String,
        trim: true,
        required: true,
        min: [6, 'Longer son'],
        validate(value) {
            if(value === 'password') {
                throw new Error('Not a valid password')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be positive number')
            }
        }
    }
})

module.exports = User;