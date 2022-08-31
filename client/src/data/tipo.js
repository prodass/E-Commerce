import { getTipos } from "../api";

class tipo{
    constructor(codigo,descripcion){
        this.codigo = codigo;
        this.descripcion = descripcion;
    }
}

const tipos = [new tipo(1,"prueba")];

getTipos().then((result) => {
    console.log(result);
    result.forEach(element => {
        tipos.push(new tipo(element.codigo, element.descripcion));
    });
});

export default tipos;


