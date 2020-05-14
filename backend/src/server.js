const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciado o APP
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/palmares_vende', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./models');

// var Schema = mongoose.Schema;

// const User = mongoose.model('User');
// const Store = mongoose.model('Store');

app.use('/api', require('./routes'));

app.listen(3000);