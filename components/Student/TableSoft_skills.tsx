import "@pathofdev/react-tag-input/build/index.css";
import { useState } from "react";

function Tablesoft_skills({ Soft_skills, deleteTableSoft_skills, handleChangeSoft_skills }) {
    return (
        Soft_skills.map((data, index) => {
            const { Nombre} = data;
            return (
                <div className="card-body">
                    <div className="row m-0 shadow p-md-3 p-1 rounded-fz" key={index}>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Soft Skills</label>
                            <input type="text" value={Nombre} onChange={(evnt) => (handleChangeSoft_skills(index, evnt))} id="Nombre" name="Nombre" className="input-default" />
                        </div>                  
                    <div className="col-12"><button type="button" className="btn btn-danger" onClick={() => (deleteTableSoft_skills(index))}>Delete Soft Skills</button></div>
                </div>
                </div>
            )
        })
    )
}
export default Tablesoft_skills;