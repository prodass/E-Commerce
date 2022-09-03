import React, { useState } from "react";

import Home from "./Home/Home";
import NXM from "./Promociones/NXM/NxM";
import Descuento from "./Promociones/Descuento/Descuento";
import Codigo from "./Promociones/Codigo/Codigo";
import PopUp from "./Promociones/PopUp";
import NuevaPromocion from "./Promociones/NuevaPromocion";

function App(){
    const [codigoPromocion, setCodigoPromocion] = useState();
    const [showPopUp, setShowPopUp] = useState(false);
    const [showNuevaPromocion, setShowNuevaPromocion] = useState(false);
    const handlePopUpClose = () => setShowPopUp(false);
    const handleNuevaPromocionClose = () => setShowNuevaPromocion(false);

    function handleHomeClick(codigo){
        setCodigoPromocion(codigo);
        setShowPopUp(true);
    }

    function handlePopUpClick(codigo){
        handlePopUpClose();
        if(codigo === 1){
            setShowNuevaPromocion(true);
        }
    }

    return (<div>
        <Home handleClick = {handleHomeClick}/>
        <PopUp show = {showPopUp} handleClose = {handlePopUpClose} handleClick = {handlePopUpClick}/>
        <NuevaPromocion show = {showNuevaPromocion} codigoPromocion = {codigoPromocion} handleClose = {handleNuevaPromocionClose}/>
    </div>)
}

export default App;