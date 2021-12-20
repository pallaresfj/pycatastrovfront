import { Link } from "react-router-dom";

const Dashusuinterno = () =>{

    return (
        <div>
            
            <div>
                <Link to='/crearpredio'>Crear Predio</Link>
            </div>

            <div>
                <Link to='/gestionpredio'>Modificar dueño predio</Link>
            </div>

            <div>
                <Link to='/definirpagomax'>Definir fecha pago máximo</Link>
            </div>

            <div>
                <Link to='/definirpagomaxdesc'>Definir fecha pago máximo con descuento</Link>
            </div>


           
           
        </div>
    )

    
}

export default Dashusuinterno