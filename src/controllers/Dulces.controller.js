const dulcesController = {};
const Dulces = require('../models/Dulces.model');

dulcesController.obtenerDulces = async(req,res)=>{
    const dulces = await Dulces.find();
    res.json(dulces);
}

dulcesController.insertarDulce = async (req,res)=>{
    const dulceInsertado = new Dulces(req.body);
    dulceInsertado.save();
    res.json('{"status":"Dulce insertado"}');
}

dulcesController.eliminarDulce = async (req,res)=>{
    await Dulces.findOneAndDelete({codigobarras:req.params.cb});
    res.json('{"status":"Dulce eliminado"}');
}

dulcesController.buscarDulce = async (req,res) =>{
    const dulce = await Dulces.findOne({codigobarras:req.params.cb});
    res.json(dulce);
}
module.exports=dulcesController;