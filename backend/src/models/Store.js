const mongoose = require('mongoose');
require('./User');

// const Enum = require('enum')

// const User = mongoose.model('User');

// const categoryEnum = new Enum(['Lanchonete', 'Serviços', 'Farmácia', 'Restaurantes', 'Conveniência', 'Outros']);
// const statusEnum = new Enum(['Ativo', 'Desativo', 'Pendente']);

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    ownerName: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ['Restaurante', 'Serviços', 'Farmácia', 'Lanchonete', 'Conveniência', 'Outros'],
        required: true
    },
    
    imageUrl: {
        type: String,
        required: true
    },
    
    status: {
        type: String,
        enum: ['Ativo', 'Desativo', 'Pendente'],
        required: true
    }
    
});

mongoose.model('Store', StoreSchema);