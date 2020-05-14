const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    owner: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true
    }
    
});

mongoose.model('Store', StoreSchema);