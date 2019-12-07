require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete({_id : '5deada68b879462958eff72e'}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({})
// }).then((results) => {
//     console.log(results)
// }).catch((e) => {
//     console.log(e)
// })

const findByIdAndDeletePromise = async (id) => {
    const deletedTask = await Task.findOneAndDelete({id});
    const count = await Task.countDocuments({});

    return count;
}

findByIdAndDeletePromise('5deada9f8827ad3ca491523b').then((results) => {
    console.log(`You have ${results} task left.`)
}).catch((e) => {
    console.log(e)
})