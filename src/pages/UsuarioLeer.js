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
    <>
      <div className="container w-75 my-5">
        <h1 className="fw-bold text-start text-primary py-2">
          Usuarios
        </h1>
        <div className="d-flex justify-content-end">
          <input type="text" className="form-control" float="left" id="Buscar" width="50" placeholder="Buscar..." />
          <Link className="btn btn-light" to="/crearusuario">
            <img src="/img/add-ico.png" alt="" width="50" height="50"
              className="d-inline-block align-text-middle" />
          </Link>
        </div>
      </div>
      <div className="container w-75 mb-5 border-1 rounded shadow">

        <Tabla columnas={columnas} registros={usuarios} campos={campos_usuario} bus={actualizar_usuario} botones={true} />
      </div>
    </>
  );
};

export default UsuarioLeer  
