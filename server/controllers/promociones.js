import Producto from "../models/producto.js";
import Promocion from "../models/promocion.js";
import Tipo from "../models/tipo.js";
import SubTipo from "../models/subTipo.js";

function getInicio(req,res){
    res.send("Hellow World!");
}


export {getInicio}