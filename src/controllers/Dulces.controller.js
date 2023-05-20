const dulcesController = {};
const Dulces = require('../models/Dulces.model');

dulcesController.obtenerDulces = async (req,res)=>{
    const dulces = await Dulces.find()
    res.render('../src/views/index.ejs',{dulces})
}

dulcesController.insertarDulce = async (req,res)=>{
    const productoInsertado = new Dulces(req.body)
    productoInsertado.save()
    res.redirect("/")
}

dulcesController.eliminaDulce = async (req,res)=>{
    await Dulces.findOneAndDelete({codigobarras:req.params.cb})
    res.json('{"status":"Eliminado"}')
}

dulcesController.buscarDulce = async (req,res) =>{
    const dulce1 = await Dulces.findOne({codigobarras:req.params.cb})
    res.render('../src/views/editar.ejs',{dulce1})
}

module.exports=dulcesController;