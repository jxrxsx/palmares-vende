const BASE_API_URL = 'http://localhost:3000/api';
const BASE_IMG_CDN_URL = '';
const CONTROLLER = 'store';
// const ACTION = 'index';

const WHATSAPP_MESSAGE = 'Olá! Encontrei sua loja no site Palmares Vende.';

$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: `${BASE_API_URL}/${CONTROLLER}`,
        dataType: 'json',
        success: function (stores) {
            
            stores.forEach(store => {
                $("#store_list").append(
                    `<div class="col-lg-3 col-md-6 mb-4">
                        <div class="card">
                            <img id="image" class="card-img-top" src="${store.imageUrl}" alt="">
                            <div class="card-body">
                                <h4 id="name" class="card-title"> ${store.name} </h4>
                                <p id="description" class="card-text"> Descrição da loja </p>
                            </div>
                            <div class="card-footer">
                                <a href="https://api.whatsapp.com/send?phone=${store.phone}&text=${WHATSAPP_MESSAGE}" class="btn btn-success"><i class="fa fa-whatsapp" aria-hidden="true"></i> Chamar no zap </a>
                            </div>
                        </div>
                    </div>`
                );
            });

        }
    });

});

// async function template () {
//     var template = 

// }