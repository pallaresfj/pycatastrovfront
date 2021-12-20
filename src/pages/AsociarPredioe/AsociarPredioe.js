import React from "react"
import FormAsociarPredioExt from "../../components/FormAsociarPredioExt"


const AsociarPredioe = () => {

    const datos_predio = (datos) => {
        
        return fetch("http://localhost:8000/api/asociarpredio", {
            method: "PUT",
            body: JSON.stringify(datos),
              headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => { ////si la transformación a JSON está bien, ejecuta esto
               
              
              
                window.location.href = "/mispredios";
            });    

    }    


    return(

        <div>

            <h3>Asociar predio a mi cuenta</h3>
            <FormAsociarPredioExt bus={datos_predio}/>




        </div>

    )}

export default AsociarPredioe