import React from "react"
import FormRegUser from "../../components/FormRegUser/FormRegUser.js"

const UsuarioCrear = () => {

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
    <FormRegUser  bus={datos_usuario} />


    </div>



)}

export default UsuarioCrear