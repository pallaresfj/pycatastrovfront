import React from "react"
import FormDefinirPagoMax from "../../components/FormDefinirPagoMax"


const DefinirPagoMax = () => {

    const datos_pagomax = (datos) => {
        console.log(datos)
    }    
    return(
        <div>
            <FormDefinirPagoMax bus={datos_pagomax}/>
        </div>
    )
}
export default DefinirPagoMax