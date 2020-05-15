const express = require('express');

const routes = express.Router();

const StoreController = require('../src/controllers/StoreController');
const UserController = require('../src/controllers/UserController');
const AdminPanelController = require('../src/controllers/AdminPanelController');


// rotas do controller de store
routes.get('/store', StoreController.index);

routes.post('/store', StoreController.create);

routes.get('/store/:id', StoreController.show);

routes.put('/store/:id', StoreController.update);

routes.delete('/store/:id', StoreController.delete);

routes.get('/store/seed', StoreController.seed);


// rotas do controller de user
routes.get('/user', UserController.index);

routes.post('/user', UserController.create);

routes.get('/user/:id', UserController.show);

routes.put('/user/:id', UserController.update);

routes.delete('/user/:id', UserController.delete);

routes.get('/user/seed', UserController.seed);


//rotas do controller do painel de admin
routes.get('/panel', AdminPanelController.index);

//exporta todas as rotas
module.exports = routes;