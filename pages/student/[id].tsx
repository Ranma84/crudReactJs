import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import TableRows from "../../components/Student/TableRows"
import Tabletech_skills from "../../components/Student/Tabletech_skills"
import TableSoft_skills from "../../components/Student/TableSoft_skills"

import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { IoIosAddCircleOutline, IoMdHeartEmpty } from 'react-icons/io';
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const cloudFrontCompat = require("next-aws-cloudfront");

const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
) as any;
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const  url1="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion/liststudentget";
const  url2="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion/mybucketimagen?file=";

function StudentPage({student,props}) {

  const options = {
    headers: {
      'accessKeyId': process.env.ACCESS_KEY
    }
  }

  const [work_experience, setWork_experience] = useState([]);
  const [tech_skills, setTech_skills] = useState([]);
  const [soft_skills, setSoft_skills] = useState([]);

  const llenartablas = ()=>{
    work_experience.push(...student.work_experience);
    tech_skills.push(...student.tech_skills);
    soft_skills.push(...student.soft_skills);
  }


  module.exports.render = async (event, context) => {
    const { req, res, responsePromise } = cloudFrontCompat(event.Records[0].cf);
    return responsePromise;
  };



    
///// https://diegooo.com/s3-como-cargar-y-entregar-datos/

  llenartablas();

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
    setTech_skills([...tech_skills, rowsInput]);
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
  
  
  const handleChangeSoft_skills = (index, evnt)=>{
    const { name, value } = evnt.target;
    const rowsInput = [...soft_skills];
    rowsInput[index][name] = value;
    setSoft_skills(rowsInput);
  }
  
  const handleChangeTech_skills = (index, evnt)=>{
    const { name, value } = evnt.target;
    const rowsInput = [...tech_skills];
    rowsInput[index][name] = value;
    setTech_skills(rowsInput);
  }
  
  const handleChange = (index, evnt)=>{
    const { name, value } = evnt.target;
    const rowsInput = [...work_experience];
    rowsInput[index][name] = value;
    setWork_experience(rowsInput);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = new FormData();
      body.append("file", image);
      student.observations;
      student.picture=image.name;
      await axios.post(url1, {student,work_experience,tech_skills,soft_skills});
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
    const res = await fetch(`/api/upload-url?file=${filename}`);
    const { urlfile, fields } = await res.json();
    const formData = new FormData();
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const upload = await fetch(urlfile, {
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
              <h1>Student</h1>
              <h3 className="fs-6">Student Information</h3>
              <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                  <form className="card-body " 
                  onSubmit={handleSubmit}>
                  <div className="row">
                  <div className="mb-3  col-md-6 col-12">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input required  value={student.first_name} type="text" className="form-control" id="first_name" name="first_name" />
                  </div>
                  <div className="mb-3 col-md-6 col-12">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input required  value={student.last_name} type="text" className="form-control" id="last_name" name="last_name" />
                  </div>
                  <div className="mb-3 col-md-6 col-12">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input required  type="number" min="0" step="1" max="99" value={student.age} className="form-control" id="age" name='age' aria-describedby="emailHelp" />
                  </div>
                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="years_experienceEmpresa" className="form-label">Years experience</label>
                      <input min="0" step="1" max="99"  value={student.years_experience} className="form-control" id="years_experience" name="years_experience"/>
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="years_experienceEmpresa" className="form-label">Description</label>
                      <input type="text"  value={student.description} className="form-control" id="description" name="description"/>
                    </div>
                    
                    <div className="mb-3  col-md-6 col-12">
                      <label  className="form-label">Foto</label>
                      <img width="220" height="293" alt="" src={"data:image/png;base64,"+student.picture}/>
                    </div>

                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="years_experienceEmpresa" className="form-label">Description</label>
                      <input type="text"  value={student.observations} className="form-control" id="observations" name="observations"/>
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
                  </form>
              </div>
          </div>
  </DefaultLayout>
);
}

export async function getServerSideProps(context)  {
 
  const { data: studentstring } = await axios.post( url1,{id:context.query.id});
  const student=JSON.parse(studentstring);

  if(student.picture!=''){
    const { data: img } = await axios.get( url2+student.picture);
    student.picture=img;
  }
  return {
    props: {
      student
    },
  };
};

export default StudentPage;
