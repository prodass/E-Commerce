import React from "react";

import Button from "../Button";


function Options(){
    let tipos = []
    import("../../data/tipo").then((importedModule)=>{
        tipos = importedModule.tipos;
    });
    console.log(tipos);
    console.log("paso");
    return  (<div className="options">
    <h3 className="sub-title">Seleccione la categoria deseada</h3>
    <div>
        {tipos.map((element)=>{
            return <Button key = {element.codigo} text = {element.descripcion}/>
        })}
    </div>
    </div>)
}

export default Options;