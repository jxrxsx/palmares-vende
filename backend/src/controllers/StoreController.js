const mongoose = require('mongoose');

const Store = mongoose.model('Store');

mongoose.set('useFindAndModify', false);

module.exports = {
    async index (req, res) {
        const store = await Store.find();

        return res.json(store);
    },    

    async create (req, res) {
        const store = await Store.create(req.body);

        return res.send();
    },

    async show (req, res) {
        const store = await Store.findById(req.params.id);

        return res.json(store);
    },

    async update (req, res) {
        console.log(req.params.id);

        const store = await Store.findByIdAndUpdate(req.params.id, req.body , { new: true });
        console.log('atualizou os dados da loja');
        
        return res.json(store);
    },

    async delete (req, res) {
        const store = await Store.findByIdAndDelete(req.params.id);

        return res.send();
    },

    async seed(req, res){
        // implementar seed
    }

};