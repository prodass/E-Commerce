import React, { useState } from "react";

import Button from "./Button";

function Options(){

    return  <div className="options">
    <h3 className="sub-title">Seleccione la categoria deseada</h3>
    <div>
        <Button text = "Descuentos"/>
        <Button text = "NXM"/>
        <Button text = "Bonos"/>
    </div>
    </div>
}

export default Options;