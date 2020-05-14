const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true
    }

    
});

mongoose.model('User', UserSchema);