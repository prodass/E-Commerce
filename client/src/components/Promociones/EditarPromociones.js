import React, { useState, useEffect } from "react";

import Modal from 'react-bootstrap/Modal'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import "../../styles/editarPromociones.css";

import {getPromocionesById} from "../../api/index";

function EditarPromociones(props){
    const [promociones, setPromociones] = useState([]);
    useEffect(()=>{
        getPromocionesById(props.codigoPromocion).then(json => setPromociones(json));
    },[]);
    function handleDeleteClick(){
        alert("No implementado");
    }
    function handleEditClick(){
        alert("No implementado");
    }

    return(
        <Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={false} size = "xl">
        <Modal.Header closeButton>
          <Modal.Title>Promociones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {promociones.map((promocion)=>{
                return (<div className="row" key = {promocion._id}>
                            <div className="col-lg-11">{promocion.descripcion}</div>
                            <div className="col-lg-1">
                                <FontAwesomeIcon icon={faPenToSquare} className="icon clickable" onClick={handleEditClick}/>
                                <FontAwesomeIcon icon={faTrash} className="icon clickable" onClick={handleDeleteClick}/>
                            </div>
                    </div>);
            })}
            
        </Modal.Body>
      </Modal>
    );
}


export default EditarPromociones;