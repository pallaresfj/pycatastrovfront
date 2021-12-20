import React from "react";
import { Form, Button } from "react-bootstrap";

const FormLogin = ({bus}) => {


    const enviar_formulario = (e) => {

      e.preventDefault()    
      
      const logindatos = {
        
        correo: e.target.correo.value,
        password: e.target.password.value,
        
      }

      
      
      bus(logindatos)

      

    }




    return (
        <Form onSubmit={enviar_formulario}>

          <Form.Group className="mb-3">
            <Form.Control type="email" name="correo" placeholder="Correo" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" name="password" placeholder="Contraseña" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Iniciar Sesion
          </Button>

        </Form>

    )





}

export default FormLogin