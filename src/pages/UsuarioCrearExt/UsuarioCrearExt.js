import React from "react"
import FormRegUserExt from "../../components/FormRegUserExt/FormRegUserExt.js"

const UsuarioCrearExt = () => {

    const datos_usuario = (usuario) => {
        
      fetch("http://localhost:8000/api/crearusuario", {
      method: "POST",
      body: JSON.stringify(usuario),
        headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        //window.location.href = "/usuario";
      });


        }


   return(

<div>

    <h3>Creación de usuario</h3>
    <FormRegUserExt  bus={datos_usuario} />


    </div>



)}

export default UsuarioCrearExt