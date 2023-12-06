const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
    nameOnCard: {
        type: String,
        required: true,
        trim: true
    },
    cardNum: {
        type: Number,
        required: true,
        trim: true
    },
    securityCode: {
        type: Number,
        required: true,
        trim: true
    }
});

const Payment = model('Payment', paymentSchema);

module.exports = Payment;