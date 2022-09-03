import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal'; 
import Button from "../Button";

function PopUp(props){
    return <Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione una opción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button text = "Crear una nueva promoción" handleClick = {props.handleClick} codigo = {1}/>
        <Button text = "Seleccionar una promoción existente" handleClick = {props.handleClick} codigo = {2}/>
        </Modal.Body>
      </Modal>
}

export default PopUp;