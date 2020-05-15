const BASE_API_URL = 'http://localhost:3000/api';
const PANEL_CONTROLLER = 'panel';
const STORE_CONTROLLER = 'store';

$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: `${BASE_API_URL}/${PANEL_CONTROLLER}`,
        dataType: 'json',
        success: function (stores) {
            console.log('dados retornados da api');
            console.log(stores);
            $('#table-lojas').DataTable({
                data: stores,
                columns: [
                    { title: "ID" },
                    { title: "Loja" },
                    { title: "Responsável" },
                    { title: "Celular" },
                    { title: "Categoria" },
                    { title: "Status" },
                    { title: "Editar" },
                    { title: "Deletar" },
                ]
        
            });
        },

    });






});

    
$('#deleteBtn').on('click', function () {
    let id = $(this).attr('name');
    alert(`id do botao: ${id}`);

    $.ajax({
        type: 'DELETE',
        url: `${BASE_API_URL}/${STORE_CONTROLLER}/${id}`,
        dataType: 'json',
        success: function (response) {
            console.log(response);
        }
    });
});