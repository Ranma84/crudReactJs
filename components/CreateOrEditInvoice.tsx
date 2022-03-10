import { useState } from "react";

export default function CreateOrEditInvoice({ url, state, isLoading, data }) {

    const [formData, setFormData] = useState({});
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Factura - {state == "create" ? 'Creando' : 'Editando'}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3 ">
                                <label htmlFor="exampleInput" className="form-label" >Seleccione una proveedor *</label>
                                <select className=" input-default" id="exampleInput" required aria-label="Default select example">
                                    <option selected>Sección</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="exampleInput1" className="form-label">Razón social *</label>
                                <input type="text" required className="input-default" placeholder="Escriba el requisito" id="exampleInput1" />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="exampleInput1" className="form-label">Contacto de factura *</label>
                                <input type="text" required className="input-default" placeholder="Escriba el requisito" id="exampleInput1" />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="exampleInput1" className="form-label">Teléfono *</label>
                                <input type="text" required className="input-default" placeholder="Escriba el requisito" id="exampleInput1" />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="exampleInput1" className="form-label">Correo electrónico *</label>
                                <input type="text" required className="input-default" placeholder="Escriba el requisito" id="exampleInput1" />
                            </div>

                            
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary"  disabled={isLoading}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}