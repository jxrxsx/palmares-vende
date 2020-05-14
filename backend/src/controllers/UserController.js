const mongoose = require('mongoose');

const User = mongoose.model('User');

mongoose.set('useFindAndModify', false);

module.exports = {
    async index (req, res) {
        const user = await User.find();

        return res.json(user);
    },    

    async create (req, res) {
        const user = await User.create(req.body);

        return res.send();
    },

    async show (req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    async update (req, res) {
        console.log(req.params.id);

        const user = await User.findByIdAndUpdate(req.params.id, req.body , { new: true });
        console.log('atualizou os dados da usuário');
        
        return res.json(user);
    },

    async delete (req, res) {
        const user = await User.findByIdAndDelete(req.params.id);

        return res.send();
    },

    async seed(req, res){
        // implementar seed
    }

};