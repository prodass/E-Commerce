import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

import { getTipos } from "../../api";

function Options(){
    const navigate = useNavigate();
    const [tipos, setTipos] = useState([]);
    useEffect(()=>{
        getTipos().then(json =>{setTipos(json);});
    },[]);
    

    function handleClick(text){
        navigate("/" + text);
    }

    return  (<div className="options">
    <h3 className="sub-title">Seleccione la categoria deseada</h3>
    <div>
        {tipos.map((element)=>{
            return <Button key = {element.codigo} text = {element.descripcion} handleClick = {handleClick}/>
        })}
    </div>
    </div>)
}

export default Options;