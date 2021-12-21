import React from "react"
import FormLogin from "../../components/FormLogin"

const UsuarioLogin = ({bus}) => {

     const datosLogin = async (logindatos) => {
       
       return fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify(logindatos),
              headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => { ////si la transformación a JSON está bien, ejecuta esto
                if (!response.correoycontrasena){
                alert('correo o contraseña invalida')
                }
                else{
                    window.sessionStorage.setItem("nivelacceso", JSON.stringify(response.nivelacceso))
                    window.sessionStorage.setItem("cedula", JSON.stringify(response.cedula))
                    window.sessionStorage.setItem("nombre", JSON.stringify(response.nombre))
                    window.sessionStorage.setItem("correo", JSON.stringify(response.correo))
                    if (response.nivelacceso === 1){
                        window.location.href = "/dashadmin";

                    } 
                    if (response.nivelacceso === 2){
                        window.location.href = "/dashui";

                    } 
                    if (response.nivelacceso === 3){
                        window.location.href = "/dashue";

                    } 

                }
              
              
                //window.location.href = "/usuario";
            });

    }    



    return(
        <div>
            <FormLogin bus={datosLogin}/>
        </div>
    )}

export default UsuarioLogin