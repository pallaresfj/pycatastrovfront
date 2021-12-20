import React from "react"
import FormDefinirPagoMaxDesc from "../../components/FormDefinirPagoMaxDesc"


const DefinirPagoMaxDesc = () => {

    const datos_pagomax = (datos) => {
        console.log(datos)


    }    


    return(

        <div>

            <h3>Definir fecha de pago máximo con Descuento</h3>
            <FormDefinirPagoMaxDesc bus={datos_pagomax}/>


        </div>

    )}

export default DefinirPagoMaxDesc