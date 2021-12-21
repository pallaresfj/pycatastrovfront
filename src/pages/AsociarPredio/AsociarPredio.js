import React from "react"
import FormAsociarPredio from "../../components/FormAsociarPredio"


const AsociarPredio = () => {

    const datos_predio = (datos) => {
        console.log(datos)
    }    
    return(
        <div>
            <FormAsociarPredio bus={datos_predio}/>
        </div>
    )
}
export default AsociarPredio