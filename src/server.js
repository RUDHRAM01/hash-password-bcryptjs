const express = require('express')
const portNo = 3000
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const StudentRouter = require('./router/Student')
require('./db/db')

app.use(cors());
app.options('*', cors())
app.use(bodyParser.json());

app.use(StudentRouter)
app.use("/", (req, res) => {
    res.send("hello user")
})

app.listen(portNo, "127.0.0.1", () => {
    console.log(`server is running on port no : ${portNo}`)
})