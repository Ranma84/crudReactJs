import { useState } from "react";

export default function CreateOrEditSection({ url, state, isLoading, data }) {
    // const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({});

    return (<div className="modal fade" id="modalSection" tabIndex={-1} aria-labelledby="modalSectionLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalSectionLabel">Requerimiento - {state == "create" ? 'Creando' : 'eliminando'}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInput1" className="form-label">Sección *</label>
                        <input type="text" required className="input-default" placeholder="Escriba la sección" id="exampleInput1" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInput" className="form-label" >Seleccione una Calificacion *</label>
                        <select className=" input-default" id="exampleInput" required aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                   
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary" disabled={isLoading}>Guardar</button>
            </div>
        </div>
    </div>
</div>
);
}