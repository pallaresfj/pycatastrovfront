import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import UsuarioCrear from "./pages/UsuarioCrear/UsuarioCrear.js";
import UsuarioLogin from "./pages/UsuarioLogin/UsuarioLogin.js";
import CrearPredio from "./pages/CrearPredio/CrearPredio.js";
import GestionPredio from "./pages/GestionPredio/GestionPredio.js";
import UsuarioCrearExt from "./pages/UsuarioCrearExt/index.js";
import DefinirPagoMax from "./pages/DefinirPagoMax/DefinirPagoMax.js";
import DefinirPagoMaxDesc from "./pages/DefinirPagoMaxDesc/DefinirPagoMaxDesc.js";
import AsociarPredio from "./pages/AsociarPredio/AsociarPredio.js";
import Dashadmin from "./pages/Dashboards/dashadmin/Dashadmin.js";
import Dashusuexterno from "./pages/Dashboards/dashusuexterno/Dashusuexterno.js";
import Dashusuinterno from "./pages/Dashboards/dashusuinterno/Dashusuinterno.js";
import UsuarioLeer from "./pages/UsuarioLeer.js";
import Usuarioextverpredios from "./pages/Usuarioextverpredios/Usuarioextverpredios.js";
import AsociarPredioe from "./pages/AsociarPredioe/AsociarPredioe.js";


const App = () => {


return (

  <BrowserRouter>
  <Routes>
    <Route path='/crearusuario' element={<UsuarioCrear />} />
    <Route path='/crearusuarioext' element={<UsuarioCrearExt />} />
    <Route path='/' element={<UsuarioLogin />} />
    <Route path='/crearpredio' element={<CrearPredio />} />
    <Route path='/gestionpredio' element={<GestionPredio />} />
    <Route path='/definirpagomax' element={<DefinirPagoMax />} />
    <Route path='/definirpagomaxdesc' element={<DefinirPagoMaxDesc />} />
    <Route path='/asociarpredios' element={<AsociarPredio />} />
    <Route path='/asociarprediose' element={<AsociarPredioe />} />
    <Route path='/dashadmin' element={<Dashadmin />} />    
    <Route path='/dashue' element={<Dashusuexterno />} /> 
    <Route path='/dashui' element={<Dashusuinterno />} /> 
    <Route path='/usuarios' element={<UsuarioLeer />} /> 
    <Route path='/mispredios' element={<Usuarioextverpredios />} />

    </Routes>
</BrowserRouter>


)


} 

export default App