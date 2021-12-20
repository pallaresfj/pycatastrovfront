import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tabla from "../../components/tabla";

const Usuarioextverpredios = () => {
    const [usuarios, setUsuarios] = useState([]);
  
    //let navigate = useNavigate();
  
    useEffect(() => {
   //   if (!token) { desactivado ya que no estamos usando JWT token para verificar que se haya iniciado sesión
   //     navigate('/')
   //   }
      obtener_prediosa();
      
    });
  

   
    const obtener_prediosa = () => {
        

        fetch("http://localhost:8000/api/prediosasociados", {
        method: 'POST',
        body: JSON.stringify( {"cedula": parseInt( window.sessionStorage.getItem('cedula')  ) } ), 
        headers: {
            "Content-Type": "application/json",
          },
       
        
       // headers: {
       //   'auth-token-jwt': token
       // }
      })
        .then((response) => response.json())
        .then((data) => {
          setUsuarios(data);
        });
    };
  
    const columnas = [
      "Id",
      "Codigo",
      "Nombre",
      "Cedula",
      "Area total",
      "Area Construida",
      "Dirección",
      "Barrio"
    ];
  
    const campos_predio = [
      "_id",
      "codigo",
      "nombre",
      "cedula",
      "areat",
      "areac",
      "direccion",
      "barrio"
    ];
  
    return (
      <div>
        <h3>Lista de mis predios</h3>
        <Link to="/crear_usuario">Crear Usuario</Link>
        <Tabla columnas={columnas} registros={usuarios} campos={campos_predio} bus={obtener_prediosa} botones={false}/>
     </div>
    
    );
};

export default Usuarioextverpredios  
