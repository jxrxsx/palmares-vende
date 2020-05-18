const mongoose = require('mongoose');

const Store = mongoose.model('Store');

mongoose.set('useFindAndModify', false);

module.exports = {
    async index (req, res) {
        const stores = await Store.find();

        var storeArr = [];
        var arrayOfStoresArr = [];

        for (let [i, store] of stores.entries()){
            storeArr = [];
            storeArr.push(store.id);
            storeArr.push(store.name);
            storeArr.push(store.ownerName);
            storeArr.push(store.phone);
            storeArr.push(store.category);
            storeArr.push(`<span class="badge badge-pill badge-info">${store.status}</span>`);
            
           // console.log(`indice do array de lojas: ${i}`);

            let editBtnHtmlTemplate = 
                `<button id="${store.id}" name="editBtn" type="button" class="btn btn-warning">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    Editar 
                </button>`;

            let deleteBtnHtmlTemplate = 
                `<button id="${store.id}" name="deleteBtn" type="button" class="btn btn-danger">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                    Deletar 
                </button>`;

            // retorna string contendo a tag html com o ícone de edit do font awesome
            storeArr.push(editBtnHtmlTemplate);
            // retorna string contendo a tag html com o ícone de edit do font awesome
            storeArr.push(deleteBtnHtmlTemplate);
i
            // coloca tudo dentro de outro array (formato esperado pela datatable)
            arrayOfStoresArr.push(storeArr);
        }

        return res.json(arrayOfStoresArr);
    }

};