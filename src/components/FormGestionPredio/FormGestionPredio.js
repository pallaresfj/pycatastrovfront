import React from "react";
import { Form, Button } from "react-bootstrap";

const FormGestionPredio = ({bus}) => {

  const enviar_formulario = (e) => {

    e.preventDefault()    
    
    const datos = {
      
      cedula: e.target.cedula.value,
      codigopredio: e.target.codigopredio.value,
      
    }
    
    bus(datos)

    

  }




  return (
      <Form onSubmit={enviar_formulario}>

        <Form.Group className="mb-3">
          <Form.Control type="number" name="codigopredio" placeholder="Codigo predio a actualizar" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="number" name="cedula" placeholder="Cedula nuevo propietario" />
        </Form.Group>

        
        <Button variant="primary" type="submit">
          Cambiar dueño
        </Button>

      </Form>

  )

    




}

export default FormGestionPredio