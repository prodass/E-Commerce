import React, { useEffect, useState } from "react";
import Descuento from "./Descuento/Descuento";

import "../../styles/nuevaPromocion.css"

function NuevaPromocion(props){
    const [showDescuento, setShowDescuento] = useState(false);
    const handleDescuentoClose = () => {
        setShowDescuento(false);
        props.handleClose();
    }

    useState(()=>{
        if(props.codigoPromocion == 1){
            setShowDescuento(true);
        }
    },[]);

    return (
        <Descuento show = {showDescuento} handleClose = {handleDescuentoClose} codigoPromocion = {props.codigoPromocion}/>
    ); 
}

export default NuevaPromocion;