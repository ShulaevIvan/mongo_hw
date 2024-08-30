const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required'],
        minLength: 3,
        maxLength: 25,
        trim: true,
        default: '',
        validate: {
            validator: (value) => {
                const nameRegex = /^[a-zA-Z\s]*$/;
                return nameRegex.test(value);
            },
            message: 'first name err'
        }
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required'],
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.model('Contact', contactSchema);