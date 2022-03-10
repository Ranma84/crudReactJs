import "@pathofdev/react-tag-input/build/index.css";
import { useState } from "react";

function Tabletech_skills({ Tech_skills, deleteTableTech_skills, handleChangeTech_skills }) {
    return (
        Tech_skills.map((data, index) => {
            const { Nombre} = data;
            return (
                <div className="card-body">
                    <div className="row m-0 shadow p-md-3 p-1 rounded-fz" key={index}>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Tech Skills</label>
                            <input type="text" value={Nombre} onChange={(evnt) => (handleChangeTech_skills(index, evnt))} id="Nombre" name="Nombre" className="input-default" />
                        </div>                  
                    <div className="col-12"><button type="button" className="btn btn-danger" onClick={() => (deleteTableTech_skills(index))}>Delete Tech Skill</button></div>
                </div>
                </div>
            )
        })
    )
}
export default Tabletech_skills;