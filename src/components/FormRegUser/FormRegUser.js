import React from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";

const FormRegUser = ({ bus }) => {


  const enviar_formulario = (e) => {

    e.preventDefault()

    const usuario = {
      nombre: e.target.nombre.value,
      correo: e.target.correo.value,
      cedula: e.target.cedula.value,
      password: e.target.password.value,
      nivelacceso: e.target.nivelacceso.value,
    }

    bus(usuario)



  }


  return (
    <>
      <div className="container w-50 my-5 border-1 rounded shadow">
        <div className="row">
          <div className="col">
            <h2 className="fw-bold text-center text-primary py-2">Crear Usuario</h2>

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

              <Form.Group className="mb-3">
                <Form.Control type="number" name="nivelacceso" placeholder="Tipo de acceso" />
              </Form.Group>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-bold">
                  Crear Usuario
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )





}

export default FormRegUser