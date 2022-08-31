import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal'; 
import Button from "../Promociones/Button";

function PopUp(props){
  const [show, setShow] = useState(true);

  const handleModalClose = () => setShow(false);

    return <div>
      <Modal show={show} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione una opción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button text = "Crear una nueva promoción" handleModalClose = {handleModalClose} handleModalClick = {props.handleModalClick} id = {1}/>
        <Button text = "Seleccionar una promoción existente" handleModalClose = {handleModalClose} handleModalClick = {props.handleModalClick} id = {2}/>
        </Modal.Body>
      </Modal>
    </div>
}

export default PopUp;