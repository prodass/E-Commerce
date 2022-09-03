import React, { useState } from "react";

import PopUp from "../PopUp";
import NuevaPromocion from "../NuevaPromocion";

function Descuento(){
    const [estado, setEstado] = useState(0)
    function handleModalClick(id){
        setEstado(id);
    }
    return <div>
        {estado === 0 && <PopUp handleModalClick = {handleModalClick}/>}
        {estado === 1 && <NuevaPromocion/>}
        {estado === 2 && <p>Promocion existentes</p>}
    </div>
}

export default Descuento;