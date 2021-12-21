import { Link } from 'react-router-dom'

function NavBar() {
    if (window.sessionStorage) {
        const nombre = window.sessionStorage.getItem('nombre');
        const correo = window.sessionStorage.getItem('correo');
        const nivelacceso = window.sessionStorage.getItem('nivelacceso');
        const cedula = window.sessionStorage.getItem('cedula');
        const cerrar = () => {
            sessionStorage.clear();
            window.location.href = "/inicio";
        }
        if (nivelacceso === '1') {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                        <div className="container px-5">
                            <Link to="/" className="navbar-brand">
                                <img src="/img/logo-catastro.png" alt="" width="170" height="50" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex-md justify-content-end" id="MenuNavegacion">
                                <ul className="navbar-nav ms-3">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle d-flex d-inline-block align-text-middle" to="" role="button" data-bs-toggle="dropdown">
                                            <img src="/img/user-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle" />
                                            <p className="">
                                                {nombre}
                                            </p>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    <span className="fw-bold">
                                                        Administrador<br />
                                                    </span>
                                                    <span class="fs-6 fw-lighter">
                                                        {correo}
                                                    </span>
                                                </Link>
                                            </li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li>
                                                <Link className="dropdown-item" to="/usuarios">
                                                    Usuarios
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/predios">
                                                    Administrar Predios
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/crearpredio">
                                                    Crear predio
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/gestionpredio">
                                                    Modificar dueño predio
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/asociarpredios">
                                                    Asociar predio a usuario
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/definirpagomax">
                                                    Definir fecha pago máximo
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/definirpagomaxdesc">
                                                    Definir fecha pago máximo con descuento
                                                </Link>
                                            </li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li className="nav-item">
                                                < div className="btn btn-light" onClick={cerrar}>
                                                    Salir
                                                </div >
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-3">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            <img src="/img/help-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
        if (nivelacceso === '2') {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                        <div className="container px-5">
                            <Link to="/" className="navbar-brand">
                                <img src="/img/logo-catastro.png" alt="" width="170" height="50" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex-md justify-content-end" id="MenuNavegacion">
                                <ul className="navbar-nav ms-3">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle d-flex d-inline-block align-text-middle" to="" role="button" data-bs-toggle="dropdown">
                                            <img src="/img/user-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle" />
                                            <p className="">
                                                {nombre}
                                            </p>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    <span className="fw-bold">
                                                        Usuario interno<br />
                                                    </span>
                                                    <span class="fs-6 fw-lighter">
                                                        {correo}
                                                    </span>
                                                </Link>
                                            </li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li>
                                                <Link className="dropdown-item" to="/crearpredio">
                                                    Crear Predio
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/gestionpredio">
                                                    Modificar dueño predio
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/definirpagomax">
                                                    Definir fecha pago máximo
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/definirpagomaxdesc">
                                                    Definir fecha pago máximo con descuento
                                                </Link>
                                            </li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li className="nav-item">
                                                < div className="btn btn-light" onClick={cerrar}>
                                                    Salir
                                                </div >
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-3">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            <img src="/img/help-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
        if (nivelacceso === '3') {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                        <div className="container px-5">
                            <Link to="/" className="navbar-brand">
                                <img src="/img/logo-catastro.png" alt="" width="170" height="50" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex-md justify-content-end" id="MenuNavegacion">
                                <ul className="navbar-nav ms-3">
                                    <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle d-flex d-inline-block align-text-middle" to="" role="button" data-bs-toggle="dropdown">
                                            <img src="/img/user-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle"/>
                                            <p className="">
                                                {nombre}
                                            </p>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    <span className="fw-bold">
                                                        Usuario externo<br />
                                                    </span>
                                                    <span class="fs-6 fw-lighter">
                                                        {correo}
                                                    </span>
                                                </Link>
                                            </li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li>
                                                <Link className="dropdown-item" to="/mispredios">
                                                    Ver mis predios
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/mispagos">
                                                    Pagar saldos pendientes
                                                </Link>
                                            </li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li className="nav-item">
                                                < div className="btn btn-light" onClick={cerrar}>
                                                    Salir
                                                </div >
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-3">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            <img src="/img/help-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                <div className="container px-5">
                    <Link to="/" className="navbar-brand">
                        <img src="/img/logo-catastro.png" alt="" width="170" height="50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex-md justify-content-end" id="MenuNavegacion">
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="/usuariologin">
                                    Iniciar sesión
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/crearusuarioext">
                                    Registrate
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    <img src="/img/help-ico.png" alt="Help" width="30" height="30" className="d-inline-block align-text-middle" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;