import React from "react";
import { Form, Button } from "react-bootstrap";

const FormDefinirPagoMax = ({bus}) => {


    const enviar_formulario = (e) => {

      e.preventDefault()    
      
      const datos = {
        
        fechamax: e.target.fechamax.value,
        
        
      }
      
      bus(datos)

      

    }




    return (
        <Form onSubmit={enviar_formulario}>

          <Form.Group className="mb-3">
            <Form.Control type="date" name="fechamax" placeholder="Definir Fecha máxima de pago para todos los predios" />
          </Form.Group>

          <Button variant="primary" type="submit">
           Actualizar
          </Button>

        </Form>

    )





}

export default FormDefinirPagoMax