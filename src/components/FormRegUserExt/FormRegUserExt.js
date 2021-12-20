import React from "react";
import { Form, Button } from "react-bootstrap";

const FormRegUserExt = ({bus}) => {


    const enviar_formulario = (e) => {

      e.preventDefault()    
      
      const usuario = {
        nombre: e.target.nombre.value,
        correo: e.target.correo.value,
        password: e.target.password.value,
        cedula: e.target.cedula.value,
        nivelacceso: 3, 
      }
      
      bus(usuario)

      

    }




    return (
        <Form onSubmit={enviar_formulario}>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="nombre" placeholder="Nombre" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="email" name="correo" placeholder="Correo" />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Control type="number" name="cedula" placeholder="Cedula" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" name="password" placeholder="Contraseña" />
          </Form.Group>
                 
          <Button variant="primary" type="submit">
            Crear Usuario
          </Button>

        </Form>

    )





}

export default FormRegUserExt