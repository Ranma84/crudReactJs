import "@pathofdev/react-tag-input/build/index.css";
import { useState } from "react";

function TableRows({ Work_experience, deleteTableRows, handleChange }) {
    return (
        Work_experience.map((data, index) => {
            const { Nombre} = data;
            return (
                <div className="card-body">
                    <div className="row m-0 shadow p-md-3 p-1 rounded-fz" key={index}>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Experience</label>
                            <input type="text" value={Nombre} onChange={(evnt) => (handleChange(index, evnt))} id="Nombre" name="Nombre" className="input-default" />
                        </div>                  
                    <div className="col-12"><button type="button" className="btn btn-danger" onClick={() => (deleteTableRows(index))}>Delete Work experience</button></div>
                </div>
                </div>
            )
        })
    )
}
export default TableRows;