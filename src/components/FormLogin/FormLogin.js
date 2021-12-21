import React from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";

const FormLogin = ({ bus }) => {


  const enviar_formulario = (e) => {

    e.preventDefault()

    const logindatos = {

      correo: e.target.correo.value,
      password: e.target.password.value,

    }



    bus(logindatos)



  }




  return (
    <>
      <div className="container w-50 my-5 border-1 rounded shadow">
        <div className="row">
          <div className="col">
            <h2 className="fw-bold text-center text-primary py-2">Iniciar Sesión</h2>
            <Form onSubmit={enviar_formulario}>
              <div className="mb-4">
                <label for="correo" className="form-label fw-bold">
                  Correo electrónico
                </label>
                <input className="form-control" type="email" name="correo" id="correo" aria-describedby="emailHelp" />
              </div>
              <div className="mb-4">
                <label for="password" className="form-label fw-bold">
                  Contraseña
                </label>
                <input className="form-control" type="password" name="password" id="password"/>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-bold">
                  Iniciar Sesión
                </button>
              </div>
              <div className="my-3">
                <span>
                  No tienes cuenta? <Link to="crearusuarioext">Registrate</Link>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )





}

export default FormLogin