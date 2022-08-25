import { getTipos } from "../api";

const tipos = [];

class tipo{
    constructor(codigo,descripcion){
        this.codigo = codigo;
        this.descripcion = descripcion;
    }
}

getTipos().then((result)=>{
    result.forEach(element => {
        tipos.push(new tipo(element.codigo,element.descripcion));
    });
});

export {tipos};