import { Link } from "react-router-dom";

const dashadmin = () =>{

    return (
        <div>
            <div>
                <Link to='/usuarios'>Administrar usuarios</Link>
            </div>
           
            <div>
                <Link to='/crearusuario'>Crear Usuarios</Link>
            </div>
           
            <div>
                <Link to='/predios'>Administrar predios</Link>
            </div>
           
            <div>
                <Link to='/crearpredio'>Crear Predio</Link>
            </div>

            <div>
                <Link to='/gestionpredio'>Modificar dueño predio</Link>
            </div>

            <div>
                <Link to='/asociarpredios'>Asociar predio a usuario</Link>
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

export default dashadmin