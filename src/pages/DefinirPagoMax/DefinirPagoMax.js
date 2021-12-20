import React from "react"
import FormDefinirPagoMax from "../../components/FormDefinirPagoMax"


const DefinirPagoMax = () => {

    const datos_pagomax = (datos) => {
        console.log(datos)


    }    


    return(

        <div>

            <h3>Definir fecha de pago máximo</h3>
            <FormDefinirPagoMax bus={datos_pagomax}/>


        </div>

    )}

export default DefinirPagoMax