const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const Student = new Schema({
    name: 'string',
    email: 'string',
    password: 'string'
})

Student.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

const StudentModel = mongoose.model('Student', Student);

module.exports = StudentModel