import Tipo from "../models/tipo.js";
import Condicion from "../models/condicion.js";




async function validateForm(formInput){
    return new Promise(async (resolve,reject)=>{
        let validated = true;
        //Validar que exista el codigo de tipo de promocion especificado;
        Tipo.find((err,foundTipos)=>{
            if(err){
                validated = false;
            }
            else{
                let band = false;
                foundTipos.forEach((tipo)=>{
                    if(tipo.codigo == formInput.formValues.codigoPromocion){
                        band = true;
                        console.log("se ejecuta esto");
                    }
                });
                if(!band){
                    validated = false;
                }
            }
        });
        console.log("despues se ejecuta esto");
        //Validar la descripcion;
        if(formInput.formValues.descripcion.length === 0){
            validated = false;
        }

        //Validar las fechas;
        if(formInput.formValues.fechaInicio.length === 0 || formInput.formValues.fechaFin.length === 0){
            validated = false;
        }
        else{
            const fechaInicio = new Date(formInput.formValues.fechaInicio);
            const fechaFin = new Date(formInput.formValues.fechaFin);
            if(fechaInicio > fechaFin){
                validated = false;
            }
        }

        //Validar productos;
        if(formInput.productosSeleccionados.length === 0){
            validated = false;
        }

        //Validar descuento;
        if(formInput.formValues.descuento.length === 0){
            validated = false;
        }

        //Validar dependiendo cada tipo de promocion;
        switch(formInput.formValues.codigoPromocion){
            case 1:
                if(await validarDescuento("1",formInput.formValues.condicion, formInput.formValues.valor) === false){
                    return false;
                }
                break;
        }


        //Si paso todo sin devolver;
        resolve(validated);
        });
}

async function validarDescuento(codigoPromocion, codigoCondicion, valor){
    if(Number(codigoCondicion) != 0){
        await Condicion.find().populate("tipo").exec((err,foundCondiciones)=>{
            if(err){
                return false;
            }
            else{
                if(foundCondiciones){
                    let band = false;
                    foundCondiciones.forEach((condicion)=>{
                        if(condicion.tipo.codigo == codigoPromocion){
                            if(condicion.codigo == codigoCondicion){
                                band = true
                            }
                        }
                    });
                    if(!band){
                        return false
                    }
                    else{
                        if(isNaN(valor)){
                            return false;
                        }
                        else{
                            return true;
                        }
                    }
                }
                else{
                    return false;
                }
            }
        });
    }
    else{
        return true
    }
    
}



export default validateForm;