function Servicios() {
    return (
        <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                        <h2 className="h4 fw-bolder">Todo lo que debe saber sobre Catastro.</h2>
                        <p>Aquí encuentra respuestas a las preguntas más frecuentes sobre temas catastrales.</p>
                        <a className="text-decoration-none" href="#!">
                            Ver más.....
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                        <h2 className="h4 fw-bolder">Encuéntrenos fácil</h2>
                        <p>Presentamos las diferentes sedes y horarios de atención a los ciudadanos.</p>
                        <a className="text-decoration-none" href="#!">
                            Ver más.....
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                        <h2 className="h4 fw-bolder">Guía de Trámites y Servicios</h2>
                        <p>Encuentra toda la información relacionada con los trámites y servicios catastrales y cuáles son sus requisitos.</p>
                        <a className="text-decoration-none" href="#!">
                            Ver más.....
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicios;