import React from "react";
import { Form, Button } from "react-bootstrap";

const FormGestionPredio = ({ bus }) => {

  const enviar_formulario = (e) => {

    e.preventDefault()

    const datos = {

      cedula: e.target.cedula.value,
      codigopredio: e.target.codigopredio.value,

    }

    bus(datos)



  }




  return (
    <>
      <div className="container w-50 my-5 border-1 rounded shadow">
        <div className="row">
          <div className="col">
            <h2 className="fw-bold text-center text-primary py-2">Cambiar dueño predio</h2>

            <Form onSubmit={enviar_formulario}>

              <Form.Group className="mb-3">
                <Form.Control type="number" name="codigopredio" placeholder="Codigo predio a actualizar" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="number" name="cedula" placeholder="Cedula nuevo propietario" />
              </Form.Group>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-bold">
                  Cambiar Dueño
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
export default FormGestionPredio