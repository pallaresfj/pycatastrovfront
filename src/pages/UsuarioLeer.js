import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tabla from "../components/tabla/Tabla.js";

const UsuarioLeer = () => {
    const [usuarios, setUsuarios] = useState([]);
  
    let navigate = useNavigate();
  
    useEffect(() => {
   //   if (!token) { desactivado ya que no estamos usando JWT token para verificar que se haya iniciado sesión
   //     navigate('/')
   //   }
      obtener_usuarios();
    });
  

   
    const obtener_usuarios = () => {
      fetch("http://localhost:8000/api/allusers", {
        method: 'GET',
       // headers: {
       //   'auth-token-jwt': token
       // }
      })
        .then((response) => response.json())
        .then((data) => {
          setUsuarios(data);
        });
    };
  
    const actualizar_usuario = (id_usuario) => {
      navigate(`/actualizar_usuario/${id_usuario}`)
    }
  
    const columnas = [
      "Id",
      "Nombre",
      "Correo",
      "Cedula",
      "Nivel Acceso",
      "Acciones"
    ];
  
    const campos_usuario = [
      "_id",
      "nombre",
      "correo",
      "cedula",
      "nivelacceso"
    ];
  
    return (
      <div>
        <h3>Lista de todos los usuarios</h3>
        <Link to="/crear_usuario">Crear Usuario</Link>
        <Tabla columnas={columnas} registros={usuarios} campos={campos_usuario} bus={actualizar_usuario} botones={true}/>
     </div>
    
    );
};

export default UsuarioLeer  
