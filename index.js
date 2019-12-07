const express = require('express');
require('./src/db/mongoose');

const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(taskRouter);
app.use(userRouter);


app.listen(port, () => {
    console.log(port)
})