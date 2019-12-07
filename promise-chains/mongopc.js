require('../src/db/mongoose');

const User = require('../src/models/user');

// User.findByIdAndUpdate('5de84f99b1c081028c9f1a59', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})

// }).then((results) => {
//     console.log(results)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count;
}

updateAgeAndCount('5de84f99b1c081028c9f1a59', 1).then((count) => {
    console.log(count)
}).then((e) => {
    console.log(e)
})