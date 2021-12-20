import { Link } from "react-router-dom";

const Dashusuexterno = () =>{

    return (
        <div>
            
            <div>
                <Link to='/asociarprediose'>Asociar predio a usuario</Link>
            </div>

            <div>
                <Link to='/mispredios'>Ver mis predios</Link>
            </div>

            <div>
                <Link to='/mispagos'>Pagar saldos pendientes</Link>
            </div>


           
           
        </div>
    )

    
}

export default Dashusuexterno