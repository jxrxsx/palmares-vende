const BASE_API_URL = 'http://localhost:3000/api';
const PANEL_CONTROLLER = 'panel';
const STORE_CONTROLLER = 'store';

$(document).ready( async function () {

    const tableAjax = await $.ajax({
        type: 'GET',
        url: `${BASE_API_URL}/${PANEL_CONTROLLER}`,
        dataType: 'json',
        success: function (stores) {
            console.log('dados retornados da api');
            console.log(stores);
        },
    });

    var datatable_lojas = $('#table-lojas').DataTable({
        data: tableAjax,
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

   $(".btn, .btn-danger").on('click', async function () {
       console.log('clicou no delete');
       let id = $(this).attr('id');
   
       await $.ajax({
           type: 'DELETE',
           url: `${BASE_API_URL}/${STORE_CONTROLLER}/${id}`,
           dataType: 'json',
           complete: function () {
            console.log('sucesso do ajax de delete');
            datatable_lojas.clear().rows.add(tableAjax).draw();

           }

       });
    });

});