export default function Contacto() {
    return (
        <section className="bg-light py-5" id="contacto">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                    <h2 className="fw-bolder">Contáctenos</h2>
                    <p className="lead mb-0">¿Cómo podemos ayudarle?</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Escriba su nombre..." data-sb-validations="required" />
                                <label for="name">Nombre</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">Debe escribir su nombre.</div>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Correo electrónico</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">Se requiere un correo electrónico.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">La dirección de correo no es válida.</div>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Teléfono</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">Se necesita un número telefónico.</div>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Escriba su mensaje aquí..." data-sb-validations="required"></textarea>
                                <label for="message">Mensaje</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">Debe escribir un mensaje.</div>
                            </div>

                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Su mensaje fue enviado exitosamente!</div>
                                </div>
                            </div>

                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Se produjo un error al enviar el mensaje!</div>
                            </div>

                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}