import React from "react";
import { Form, Button } from "react-bootstrap";

const FormDefinirPagoMaxDesc = ({ bus }) => {


  const enviar_formulario = (e) => {

    e.preventDefault()

    const datos = {

      fechamaxdesc: e.target.fechamaxdesc.value,


    }

    bus(datos)



  }




  return (
    <>
      <div className="container w-50 my-5 border-1 rounded shadow">
        <div className="row">
          <div className="col">
            <h2 className="fw-bold text-center text-primary py-2">Definir fecha máxima de pago con descuento</h2>

            <Form onSubmit={enviar_formulario}>

              <Form.Group className="mb-3">
                <Form.Control type="date" name="fechamaxdesc" placeholder="Definir Fecha máxima de pago con descuento para todos los predios" />
              </Form.Group>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-bold">
                  Actualizar
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
export default FormDefinirPagoMaxDesc