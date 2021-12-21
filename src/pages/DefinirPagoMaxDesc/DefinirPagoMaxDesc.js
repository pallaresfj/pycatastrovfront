import React from "react"
import FormDefinirPagoMaxDesc from "../../components/FormDefinirPagoMaxDesc"


const DefinirPagoMaxDesc = () => {

    const datos_pagomax = (datos) => {
        console.log(datos)
    }    
    return(
        <div>
            <FormDefinirPagoMaxDesc bus={datos_pagomax}/>
        </div>
    )
}
export default DefinirPagoMaxDesc