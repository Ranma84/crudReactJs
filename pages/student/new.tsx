import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import TableRows from "../../components/Student/TableRows"
import Tabletech_skills from "../../components/Student/Tabletech_skills"
import TableSoft_skills from "../../components/Student/TableSoft_skills"

import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from 'react-icons/io';
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
) as any;

const  url="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion/insertstudents";
const  urlarchivos="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion";
//work_experience,tech_skills,soft_skills





function NewStudent(props) {

    const [editorState, setEditorState] = useState(() => { return EditorState.createEmpty() });
    
     var nameimagen="";
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

  const router = useRouter();
  
  const [student, setstudent] = useState({
    first_name: "",
    last_name: "",
    age: "",
    description: '',
    observations:'',
    years_experience:'',
    picture:''
  });

const [work_experience, setWork_experience] = useState([]);
const [tech_skills, setTech_skills] = useState([]);
const [soft_skills, setSoft_skills] = useState([]);


const addTableRows = ()=>{
    const rowsInput={
      Nombre:''
    }
    setWork_experience([...work_experience, rowsInput])
}

const addTableRowsTechSkills = ()=>{
  const rowsInput={
    Nombre:''
  }
  setTech_skills([...tech_skills, rowsInput])
}

const addTableRowsSoft_skills = ()=>{
  const rowsInput={
    Nombre:''
  }
  setSoft_skills([...soft_skills, rowsInput])
}



const deleteTableTech_skills = (index)=>{
  const rows = [...tech_skills];
  rows.splice(index, 1);
  setTech_skills(rows);
}

const deleteTableRows = (index)=>{
    const rows = [...work_experience];
    rows.splice(index, 1);
    setWork_experience(rows);
}

const deleteTableSoft_skills = (index)=>{
  const rows = [...soft_skills];
  rows.splice(index, 1);
  setSoft_skills(rows);
}

const handleChangeP = ({ target: { name, value } }) =>{
  setstudent({ ...student, [name] : value });
}

const handleChangeSoft_skills = (index, evnt)=>{
  console.log(index);
  const { name, value } = evnt.target;
  const rowsInput = [...soft_skills];
  rowsInput[index][name] = value;
  setSoft_skills(rowsInput);
}

const handleChangeTech_skills = (index, evnt)=>{
  console.log(index);
  const { name, value } = evnt.target;
  const rowsInput = [...tech_skills];
  rowsInput[index][name] = value;
  setTech_skills(rowsInput);
}

const handleChange = (index, evnt)=>{
  console.log(index);
  const { name, value } = evnt.target;
  const rowsInput = [...work_experience];
  rowsInput[index][name] = value;
  setWork_experience(rowsInput);
}

const handleSubmit = async (e) => {
  console.log('Sumit');
  e.preventDefault();
  console.log('Ingreso');
  try {
    var file = nameimagen;
    console.log('*********************');
    console.log(file);
    student.observations;
    student.picture=file;
    await axios.post(url, {student,work_experience,tech_skills,soft_skills});
      toast.success("Guardado", {
        position: "bottom-center",
      });
 
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const [image, setImage] = useState(null);
const [createObjectURL, setCreateObjectURL] = useState(null);

const uploadToClient = (event) => {
  if (event.target.files && event.target.files[0]) {
    const i = event.target.files[0];
    setImage(i);
    setCreateObjectURL(URL.createObjectURL(i));
  }
};

const uploadPhoto = async (e) => {
  const file = e.target.files[0];
  const filename = encodeURIComponent(file.name);
  nameimagen=filename;
  console.log(nameimagen);
  const res = await fetch(`/api/upload-url?file=${filename}`);
  const { url, fields } = await res.json();
  const formData = new FormData();
  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const upload = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  if (upload.ok) {
    console.log('Uploaded successfully!');
  } else {
    console.error('Upload failed.');
  }
};

  return (
    <DefaultLayout>
      <div>
                <h1>New Student</h1>
                <h3 className="fs-6">Student Information</h3>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body " 
                    onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="first_name" className="form-label">First Name</label>
                      <input required onChange={handleChangeP} value={student.first_name} type="text" className="form-control" id="first_name" name="first_name" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="last_name" className="form-label">Last Name</label>
                      <input required onChange={handleChangeP} value={student.last_name} type="text" className="form-control" id="last_name" name="last_name" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="age" className="form-label">Age</label>
                      <input required onChange={handleChangeP} type="number" min="0" step="1" max="99" value={student.age} className="form-control" id="age" name='age' aria-describedby="emailHelp" />
                    </div>
                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="years_experienceEmpresa" className="form-label">Years experience</label>
                        <input min="0" step="1" max="99" onChange={handleChangeP} value={student.years_experience} className="form-control" id="years_experience" name="years_experience"/>
                      </div>
                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="years_experienceEmpresa" className="form-label">Description</label>
                        <input type="text" onChange={handleChangeP} value={student.description} className="form-control" id="description" name="description"/>
                      </div>
                      
                      <div className="mb-3  col-md-6 col-12">
                        <label  className="form-label">Foto</label>
                        <img src={createObjectURL} />
                        <input type="file" id="picture" name="picture" onChange={uploadPhoto} />
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="years_experienceEmpresa" className="form-label">Description</label>
                        <input type="text" onChange={handleChangeP} value={student.observations} className="form-control" id="observations" name="observations"/>
                      </div>

                      
                      <hr />
                      </div>

                      <div>  
                        <h3 className="fs-6">List Work Experience</h3>
                        <TableRows Work_experience={work_experience} deleteTableRows={deleteTableRows} handleChange={handleChange}  />                       
                        <div className="mb-3  col-md-6 col-12">
                        <button type="button"  className="btn btn-sm btn-primary btn-custom" onClick={() =>addTableRows()} ><IoIosAddCircleOutline size={25} /></button>
                        </div> 
                      </div>

                      <div>  
                        <h3 className="fs-6">List Tech Skills</h3>
                        <Tabletech_skills Tech_skills={tech_skills} deleteTableTech_skills={deleteTableTech_skills} handleChangeTech_skills={handleChangeTech_skills}  />                       
                        <div className="mb-3  col-md-6 col-12">
                        <button type="button"  className="btn btn-sm btn-primary btn-custom" onClick={() =>addTableRowsTechSkills()} ><IoIosAddCircleOutline size={25} /></button>
                        </div> 
                      </div>

                      <div>  
                        <h3 className="fs-6">List Soft Skills</h3>
                        <TableSoft_skills Soft_skills={soft_skills} deleteTableSoft_skills={deleteTableSoft_skills} handleChangeSoft_skills={handleChangeSoft_skills}  />                       
                        <div className="mb-3  col-md-6 col-12">
                        <button type="button"  className="btn btn-sm btn-primary btn-custom" onClick={() =>addTableRowsSoft_skills()} ><IoIosAddCircleOutline size={25} /></button>
                        </div> 
                      </div>

                      <hr />

                        <button 
                        className="bg-blue-500 m-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                          Guardar
                        </button>
                    </form>
                </div>
            </div>
    </DefaultLayout>
  );
}

export default NewStudent;