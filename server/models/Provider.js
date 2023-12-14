const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const providerSchema = new Schema({
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
    },
    patients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ],
    chartNotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ChartNote'
        }
    ]
});

// if password is new or modified, hash it
providerSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = bcrypt.hash(this.password, saltRounds)
    };

    next();
});

// if password is correct, compare it with password already on file
providerSchema.methods.isCorrectPassword = async function(password) {
    bcrypt.compare(password, this.password)
};

const Provider = model('Provider', providerSchema);

module.exports = Provider;