import React from "react";
import { Form, Button } from "react-bootstrap";

const FormAsociarPredio = ({bus}) => {

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
          <Form.Control type="number" name="codigopredio" placeholder="Codigo predio" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="number" name="cedula" placeholder="Cedula propietario" />
        </Form.Group>

        
        <Button variant="primary" type="submit">
          Asociar Predio
        </Button>

      </Form>

  )

    




}

export default FormAsociarPredio