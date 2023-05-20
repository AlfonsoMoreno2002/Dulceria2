const {Router} = require('express');
const dulcesController = require('../controllers/Dulces.controller');
const router = Router();

router.get('/',dulcesController.obtenerDulces);

router.get('/:cb',dulcesController.buscarDulce);

router.delete('/eliminar/:cb',dulcesController.eliminaDulce);

router.post('/insertar',dulcesController.insertarDulce);

module.exports=router;