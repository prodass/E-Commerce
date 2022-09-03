import React, { useEffect, useState } from "react";

import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';
import { MultiSelect } from "react-multi-select-component";

import "../../styles/nuevaPromocion.css"

import { getCondiones ,getProductos } from "../../api";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Button from "../Button";

function NuevaPromocion(props){
    const [dateString, setDateString] = useState();
    const [condiciones, setCondiciones] = useState([])
    const [productos, setProductos] = useState([]);
    const [formValues, setFormValues] = useState({descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"",productos: []});
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    useEffect(()=>{
        const date = new Date();
        setDateString(date.getFullYear() + "-0" + (date.getMonth()+1) + "-0" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes());
        setFormValues({descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"",productos: []});
        setProductosSeleccionados([]);
        getCondiones().then(json => {setCondiciones(json)});
        getProductos().then(json =>{             //Se tiene que dar el formato de value, label para que funcione el multiselect
            if(productos.length === 0){
                json.forEach((producto)=>{
                    setProductos((prev)=>{
                        return [...prev,{value:producto.codigo,label:producto.nombre}];
                    })
                });
            }
        });
    },[props.show]);

    
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

    function handleSubmit(event){
        event.preventDefault();
        if(productosSeleccionados.length === 0){
            alert("Error no se pudo registrar la nueva promocion");
        }

    }

    return <Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={false} className="modal" size = "xl">
      <Modal.Header closeButton>
        <Modal.Title>Nueva Promoción</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form validated = {true} onSubmit = {handleSubmit}>
            <FormGroup className="mb-3 row">
            <div className="col col-4">
            <Form.Label>Nombre de la promoción</Form.Label>
            </div>
            <div className="col col-8">
            <Form.Control type = "text" placeholder="Ingrese la descripcion de promocion" name = "descripcion" onChange = {handleFormChange} value = {formValues.descripcion} required/>
            </div>
            
            </FormGroup>
            <FormGroup className="mb-3 row">
                <div className="col col-lg-6">
                <Form.Label>Fecha Inicio</Form.Label>
                <Form.Control type = "datetime-local" name = "fechaInicio" onChange = {handleFormChange} value = {formValues.fechaInicio} required min = {dateString}/>
                </div>
                <div className="col col-lg-6"> 
                <Form.Label>Fecha Fin</Form.Label>
                <Form.Control type = "datetime-local" placeholder="Ingrese la descripcion de promocion" name = "fechaFin" onChange = {handleFormChange} value = {formValues.fechaFin} required min={formValues.fechaInicio}/>
                </div>
            </FormGroup>
            <FormGroup className="mb-3">
            <Form.Label>Condicion</Form.Label>
            <Form.Select name = "condicion" value = {formValues.condicion} onChange={handleFormChange}>
                <option key = {0} value = {0}>Sin condicion</option>
                {condiciones.map((condicion)=>{
                    if(condicion.tipo.codigo === props.codigoPromocion){
                        return <option key = {condicion.codigo} value = {condicion.codigo}>{condicion.descripcion}</option>
                    }
                })}
            </Form.Select>
            </FormGroup>
            <FormGroup className="mb-3">
            <Form.Label>Valor</Form.Label>
            <Form.Control type = "text" placeholder="Ingrese el valor correspondiente de la condicion" name = "valor" onChange = {handleFormChange} value = {formValues.valor} required disabled = {formValues.condicion == 0 ? true : false}/>
            </FormGroup>
            <FormGroup className="mb-3">
            <Form.Label>Productos</Form.Label>
            <MultiSelect options={productos} value={productosSeleccionados} onChange={setProductosSeleccionados} labelledBy="productos"/>
            {productosSeleccionados.length === 0 && <p>Seleccione al menos un producto</p>}
            </FormGroup>

            <button>Registrar</button>
        </Form>
      </Modal.Body>
    </Modal>
}

export default NuevaPromocion;