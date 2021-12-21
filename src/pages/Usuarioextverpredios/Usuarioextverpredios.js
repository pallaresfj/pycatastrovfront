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
      <>
      <div className="container w-75 my-5">
        <h1 className="fw-bold text-start text-primary py-2">
        Lista de mis predios
        </h1>
        <div className="d-flex justify-content-end">
          <input type="text" className="form-control" float="left" id="Buscar" width="50" placeholder="Buscar..." />
          <Link className="btn btn-light" to="/asociarprediose">
            <img src="/img/add-ico.png" alt="" width="50" height="50"
              className="d-inline-block align-text-middle" />
          </Link>
        </div>
      </div>
      <div className="container w-75 mb-5 border-1 rounded shadow">

      <Tabla columnas={columnas} registros={usuarios} campos={campos_predio} bus={obtener_prediosa} botones={false}/>

      </div>
    </>
    );
};

export default Usuarioextverpredios  
