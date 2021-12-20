import React from "react"
import FormAsociarPredio from "../../components/FormAsociarPredio"


const AsociarPredio = () => {

    const datos_predio = (datos) => {
        console.log(datos)


    }    


    return(

        <div>

            <h3>Asociar predio a mi cuenta</h3>
            <FormAsociarPredio bus={datos_predio}/>




        </div>

    )}

export default AsociarPredio