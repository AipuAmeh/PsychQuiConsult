const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

patientSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = bcrypt.hash(this.password, saltRounds)
    };

    next();
});

patientSchema.methods.isCorrectPassword = async function(password) {
    bcrypt.compare(password, this.password)
};

const Patient = model('Patient', patientSchema);

module.exports = Patient;