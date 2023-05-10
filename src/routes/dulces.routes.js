const {Router} = require('express');
const dulcesController = require('../controllers/Dulces.controller');
const router = Router();

router.get('/',dulcesController.obtenerDulces);
router.post('/',dulcesController.insertarDulce);
router.delete('/:cb',dulcesController.eliminarDulce);
router.get('/:cb',dulcesController.buscarDulce);

module.exports=router;