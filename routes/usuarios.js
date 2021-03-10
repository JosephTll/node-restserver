const {Router} = require('express');
const routes = Router();

const {render} = require('../controllers/usuariosController');

routes.get('/', render);

module.exports = routes;