import React from "react";
import { Form, Button } from "react-bootstrap";

const FormCrearPredio = ({ bus }) => {


  const enviar_formulario = (e) => {

    e.preventDefault()

    const datospredio = {

      codigo: e.target.codigo.value,
      nombre: e.target.nombre.value,
      cedula: e.target.cedula.value,
      areat: e.target.areat.value,
      areac: e.target.areac.value,
      direccion: e.target.direccion.value,
      barrio: e.target.barrio.value,
      asociado: false,

    }

    bus(datospredio)



  }




  return (
      <>
      <div className="container w-50 my-5 border-1 rounded shadow">
        <div className="row">
          <div className="col">
            <h2 className="fw-bold text-center text-primary py-2">Crear Predio</h2>

            <Form onSubmit={enviar_formulario}>

            <Form.Group className="mb-3">
            <Form.Control type="number" name="codigo" placeholder="Codigo del predio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="Valor metro cuadrado" placeholder="Valor metro cuadrado" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="nombre" placeholder="Nombre propietario" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="cedula" placeholder="Cedula propietario" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="areat" placeholder="Area total predio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="areac" placeholder="Area construida predio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="direccion" placeholder="Dirección del predio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="barrio" placeholder="Barrio del predio" />
          </Form.Group>

              

              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-bold">
                  Crear Predio
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
export default FormCrearPredio