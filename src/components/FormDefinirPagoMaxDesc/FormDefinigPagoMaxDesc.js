import React from "react";
import { Form, Button } from "react-bootstrap";

const FormDefinirPagoMaxDesc = ({bus}) => {


    const enviar_formulario = (e) => {

      e.preventDefault()    
      
      const datos = {
        
        fechamaxdesc: e.target.fechamaxdesc.value,
        
        
      }
      
      bus(datos)

      

    }




    return (
        <Form onSubmit={enviar_formulario}>

          <Form.Group className="mb-3">
            <Form.Control type="date" name="fechamaxdesc" placeholder="Definir Fecha máxima de pago con descuento para todos los predios" />
          </Form.Group>

          <Button variant="primary" type="submit">
           Actualizar
          </Button>

        </Form>

    )





}

export default FormDefinirPagoMaxDesc