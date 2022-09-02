import React, { useEffect, useState } from "react";

import "../../../styles/nuevaPromocion.css"

import { getProductos } from "../../../api";

function NuevaPromocion(){
    const [productos, setProductos] = useState([]);
    const [formValues, setFormValues] = useState({descripcion: "", productos: []});
    useEffect(()=>{
        getProductos().then(json =>{setProductos(json);});
    },[]);

    
    function handleFormChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormValues((prevValue) =>{
            return{
                ...prevValue,
                [name]: value
            };
        });
    }

    return <div className = "container text-center">
    <form>
        <div className = "row form-div">
            <div className = "col col-12 input-div">
                <h6>Descripción de la promocion</h6>
                <input type="text" name = "descripcion" size={125} required value={formValues.descripcion} onChange={handleFormChange}></input>
            </div>
            <div className = "col col-lg-12 input-div">
                <h6>Seleccione los productos</h6>
            </div>
        </div>
        <button type ="submit">Ingresar</button>
        </form>
    </div>
}


export default NuevaPromocion;