const express = require('express')

const router = express.Router();

const Studentmodel = require('../model/Student')

router.post("/api/v1/student", async (req, res) => {
    console.log("calling post");
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    if (password.length < 6) {
        return res.status(400).json({ msg: "Password must be at least 6 characters" });
    }

    const student = new Studentmodel(req.body);
    await student.save().then(() => {
        res.json(student);
    }).catch((e) => {
        console.log(e);
    })
})


module.exports = router;