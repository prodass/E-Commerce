import Producto from "../models/producto.js";
import Promocion from "../models/promocion.js";
import Tipo from "../models/tipo.js";
import Condicion from "../models/condicion.js";

function getInicio(req,res){
    res.send("Hellow World!");
}

function getTipos(req,res){
    Tipo.find((err,foundTipos)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundTipos){
                res.status(200).json(foundTipos);
            }
            else{
                res.status(501).json({message: "No existen tipos en la DB"});
            }
        }
    })
}

function getCondiones(req,res){
    Condicion.find().populate("tipo").exec((err,foundCondiciones)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundCondiciones){
                res.status(200).json(foundCondiciones);
            }
            else{
                res.status(501).json({message: "No existen condiciones en la DB"});
            }
        }
    })
}



function getProductos(req,res){
    Producto.find((err,foundProductos)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundProductos){
                res.status(200).json(foundProductos);
            }
            else{
                res.status(501).json({message: "No existen productos en la DB"});
            }
        }
    })
}



export {getInicio, getTipos, getProductos, getCondiones}