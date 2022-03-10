import { useState } from "react";

export default function CreateOrEditRequirement({ url, state, isLoading, data }) {

    const [formData, setFormData] = useState({});
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Requerimiento - {state == "create" ? 'Creando' : 'Editando'}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3 ">
                                <label htmlFor="exampleInput" className="form-label" >Seleccione una sección *</label>
                                <select className=" input-default" id="exampleInput" required aria-label="Default select example">
                                    <option selected>Sección</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="exampleInput1" className="form-label">Requisito *</label>
                                <input type="text" required className="input-default" placeholder="Escriba el requisito" id="exampleInput1" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="exampleInput2" className="form-label">Descripción Requisito *</label>
                                <textarea required className="input-default" placeholder="Describa el requisito" id="exampleInput2"></textarea>
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="exampleInput2" className="form-label">Tipo de Requisito</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Archivo
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Archivo
                                    </label>
                                </div>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Este requisito tendrá la opción "No aplica"?</label>
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