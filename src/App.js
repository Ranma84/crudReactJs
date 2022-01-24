import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import MultipleValueTextInput from 'react-multivalue-text-input';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function App() {

  const url="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion/liststudents/";

  const urlInsert="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion/insertstudents";

  const urlUpdate="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion/updatestudent";

  const urlDelete="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion/deletefrom";
  

  const [estudiantes, setEstudiantes] = React.useState([])
  const [modalInsertar, setModalInsertar] = React.useState(false);
  const [tipomodal, setTipomodal] = React.useState('');
  const [modalEliminar, setModalEliminar] = React.useState(false);
  //Para el formulario
  let [created_at, setCreated_at] = React.useState(new Date());
  let [soft_skills, setSoft_skills] = React.useState('');
  let [status, setStatus] = React.useState('');
  let [picture, setPicture] = React.useState('');
  let [work_experience, setWork_experience] = React.useState('');
  let [years_experience, setYears_experience] = React.useState('');
  let [last_name, setLast_name] = React.useState('');
  let [tech_skills, setTech_skills] = React.useState('');
  let [first_name, setFirst_name] = React.useState('');
  let [observations, setObservations] = React.useState('');
  let [description, setDescription] = React.useState('');
  let [id, setId] = React.useState('');
  let [age, setAge] = React.useState('');
  //let [formulario, setFormulario] = React.useState({});

  let [elementos_sskill,setElementos_sskill] = React.useState([]);
  let [elementos_tskill,setElementos_tskill] = React.useState([]);
  let [elementos_work,setElementos_work] = React.useState([]);



  const obtenerDatos = async () => {

    try {

      fetch(url, {
        method: 'POST'
      }).then((response) => {
        if (response.ok) {
          
    
            return response.json();
            
        }
      }).then((json) => {
        console.log(json.data);
        var jsonCompleto = JSON.parse(json.data);
        console.log(jsonCompleto);
        //this.setState({data: jsonCompleto});
        setEstudiantes(jsonCompleto);
    
      }).catch((error) => {
        console.error(error);
      });
    
      
      
    } catch (error) {
      console.log(error)
    }

  }

  React.useEffect(() => {

    obtenerDatos()

  }, []);

  const eliminarEstudiante=()=>{

    let urlDelete2 = urlDelete;

    let form3 = {
      id: id
    }
  
    console.log(form3);
  
    fetch(urlDelete2, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(form3), // data can be `string` or {object}!
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {console.log('Success:', response);setModalEliminar(false);obtenerDatos();});
  }

  const actualizarEstudiante=()=>{

    let urlUpdate2 = urlUpdate;
    console.log('create ac campo en actulozar i');
    console.log(created_at);
    let form2 = {

      created_at: created_at,//
      soft_skills: soft_skills,//
      status: status,
      picture: picture,
      work_experience: work_experience,
      years_experience: years_experience,
      last_name: last_name,//
      tech_skills: tech_skills,
      first_name: first_name,//
      observations: observations,
      description: description,
      age: age,
      id:id

  }
  console.log('create ac form en actulozar i');
  console.log(form2.created_at);
  console.log('create ac from en actulozar f');
  //Inicio para soft skills
  console.log('soft skill actualizar');
  console.log(elementos_sskill);
  var length = elementos_sskill.length;  // find an array length
  let auxs = '';
  for(var i=0; i< length; i++){
    auxs +='\''+elementos_sskill[i]+'\'';  // concat Array value to a string variable
    if(i < (length-1) ){
      auxs += ',';  // add separator
    }
  }
  auxs='{'+auxs+'}';
  console.log(auxs);
  form2.soft_skills=auxs;
  console.log(form2.soft_skills);
  elementos_sskill=[];
  //Fin para soft skills

  //Inicio para tech skills
  console.log('stech skill actualizar');
  console.log(elementos_tskill);
  console.log('real valor actual');
  var length2 = elementos_tskill.length;  // find an array length
  let auxs2 = '';
  for(var j=0; j< length2; j++){
    auxs2 +='\''+elementos_tskill[j]+'\'';  // concat Array value to a string variable
    if(j < (length2-1) ){
      auxs2 += ',';  // add separator
    }
  }
  auxs2='{'+auxs2+'}';
  console.log(auxs2);
  form2.tech_skills=auxs2;
  console.log(form2.tech_skills);
  console.log('valor form actualizar');
  elementos_tskill=[];
  //Fin para tech skills

  //Inicio para work
  console.log('work actualizar');
  console.log(elementos_work);
  console.log('real valor actual');
  var length3 = elementos_work.length;  // find an array length
  let auxs3 = '';
  for(var k=0; k< length3; k++){
    auxs3 +='\''+elementos_work[k]+'\'';  // concat Array value to a string variable
    if(k < (length3-1) ){
      auxs3 += ',';  // add separator
    }
  }
  auxs3='{'+auxs3+'}';
  console.log(auxs3);
  form2.work_experience=auxs3;
  console.log(form2.work_experience);
  console.log('valor form actualizar');
  elementos_work=[];
  //Fin para tech skills

    
    console.log('fecha antes de actualizar i');
    console.log(form2.created_at);
    console.log('fecha antes de actualizar f');
  
    fetch(urlUpdate2, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(form2), // data can be `string` or {object}!
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {setModalInsertar(false);obtenerDatos();vaciarCampos()});

  }
  


  const insertarEstudiante=()=>{

    console.log('Insertar estudiante');
    console.log(first_name);
    console.log('----------');

    let form = {

        created_at: new Date(created_at),//
        soft_skills: soft_skills,//
        status: status,
        picture: picture,
        work_experience: work_experience,
        years_experience: years_experience,
        last_name: last_name,//
        tech_skills: tech_skills,
        first_name: first_name,//
        observations: observations,
        description: description,
        age: age,
        id:id

    }

    //Para soft Skills
    console.log(elementos_sskill);
    let myString = elementos_sskill.map((item) => "'"+item+"'").join(',');
    myString="{"+myString+"}";
    console.log(myString);
    setSoft_skills(myString);
    soft_skills=myString;
    console.log(soft_skills);
    elementos_sskill=[];
    form.soft_skills=soft_skills;
    //Fin para soft Skills

    //Para tech Skills
    console.log(elementos_tskill);
    let myString2 = elementos_tskill.map((item2) => "'"+item2+"'").join(',');
    myString2="{"+myString2+"}";
    console.log(myString2);
    setTech_skills(myString2);
    tech_skills=myString2;
    console.log(tech_skills);
    elementos_tskill=[];
    form.tech_skills=tech_skills;
    //Fin para tech Skills

    //Para work
    console.log(elementos_work);
    let myString3 = elementos_work.map((item3) => "'"+item3+"'").join(',');
    myString3="{"+myString3+"}";
    console.log(myString3);
    setWork_experience(myString3);
    work_experience=myString3;
    console.log(work_experience);
    elementos_work=[];
    form.work_experience=work_experience;
    //Fin work

    delete form.id;
    console.log('feacha de guradado');
    console.log(form.created_at);
    console.log('fin fecha de guardado');
    let urlInsert2 = urlInsert;
    fetch(urlInsert2, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(form), // data can be `string` or {object}!
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {setModalInsertar(false);obtenerDatos();
      vaciarCampos();
    });
    

  }
  const vaciarCampos=()=>{
    setCreated_at(new Date());
    setSoft_skills('');
    setStatus('');
    setPicture('');
    setWork_experience('');
    setYears_experience('');
    setLast_name('');
    setTech_skills('');
    setFirst_name('');
    setObservations('');
    setDescription('');
    setId('');
    setAge('');
    setElementos_sskill([]);
    setElementos_tskill([]);
    setElementos_work([]);
  }

  const seleccionarIdEstudiante=(identificador)=>{

    setId(identificador);

  }

  const seleccionarEstudiante=(estudiante)=>{

    console.log(estudiante);
    setCreated_at(new Date(estudiante.created_at));
    //created_at=estudiante.created_at;
    console.log('===estudiantes fecha ');
    console.log(estudiante.created_at);
    console.log('en seleccionar fecha ini@');
    console.log(created_at)
    console.log('en seleccionar fecha ini*');
    //////
    setSoft_skills(estudiante.soft_skills);
    setStatus(estudiante.status);
    setPicture(estudiante.picture);
    setWork_experience(estudiante.work_experience);
    setYears_experience(estudiante.years_experience);
    setLast_name(estudiante.last_name);
    setTech_skills(estudiante.tech_skills);
    setFirst_name(estudiante.first_name);
    setObservations(estudiante.observations);
    setDescription(estudiante.description);
    setId(estudiante.id);
    setAge(estudiante.age);

    //principio soft skill
    console.log("principio soft skill");
    console.log(estudiante.soft_skills);
    let nuevaAbilidad=JSON.stringify(estudiante.soft_skills)
    let nuevaAbilidad2=JSON.parse(nuevaAbilidad);

    let buscar="'"
    nuevaAbilidad2=nuevaAbilidad2.replace('{','').replace('}','');
    nuevaAbilidad2=nuevaAbilidad2.replace(new RegExp(buscar,"g") ,"");
    let arrRemplazo = nuevaAbilidad2.split(','); 

    elementos_sskill=arrRemplazo;
    setElementos_sskill(arrRemplazo);
    console.log('escojido skills');
    console.log(elementos_sskill);
    console.log("fin soft skill");
    //fin soft skill

    //principio tech skill
    console.log("principio tech skill");
    console.log(estudiante.tech_skills);
    let nuevaAbilidadt=JSON.stringify(estudiante.tech_skills)
    let nuevaAbilidad2t=JSON.parse(nuevaAbilidadt);

    let buscar2="'"
    nuevaAbilidad2t=nuevaAbilidad2t.replace('{','').replace('}','');
    nuevaAbilidad2t=nuevaAbilidad2t.replace(new RegExp(buscar2,"g") ,"");
    let arrRemplazo2 = nuevaAbilidad2t.split(','); 

    elementos_tskill=arrRemplazo2;
    setElementos_tskill(arrRemplazo2);
    console.log('escojido tkills');
    console.log(elementos_tskill);
    console.log(arrRemplazo2);
    console.log("fin tech skill");
    //fin tech 
    
    //principio work
    console.log("principio work");
    console.log(estudiante.work_experience);
    let nuevaAbilidadw=JSON.stringify(estudiante.work_experience)
    let nuevaAbilidad2w=JSON.parse(nuevaAbilidadw);

    let buscar3="'"
    nuevaAbilidad2w=nuevaAbilidad2w.replace('{','').replace('}','');
    nuevaAbilidad2w=nuevaAbilidad2w.replace(new RegExp(buscar3,"g") ,"");
    let arrRemplazo3 = nuevaAbilidad2w.split(','); 

    elementos_work=arrRemplazo3;
    setElementos_work(arrRemplazo3);
    console.log('escojido work');
    console.log(elementos_work);
    console.log("fin work");
    //fin work

  }

  return (
    <div className="App">
    <br /><br /><br />
    <div className='container'>
    <button className="btn btn-success" onClick={()=>{setModalInsertar(!modalInsertar);setTipomodal('insertar')}}>Agregar Estudiante</button>
    <br /><br />
      <table className="table ">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Años de experiencia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {
              estudiantes.map(estudiante => (
   
                <tr key={estudiante.id}>
                <td>{estudiante.id}</td>
                <td>{estudiante.first_name}</td>
                <td>{estudiante.last_name}</td>
                <td>{estudiante.years_experience}</td>
                <td>
                      <button className="btn btn-primary" onClick={()=>{setModalInsertar(!modalInsertar);setTipomodal('actualizar');seleccionarEstudiante(estudiante)}}><FontAwesomeIcon icon={faEdit}/></button>
                      {"   "}
                      <button className="btn btn-danger" onClick={()=>{setModalEliminar(!modalEliminar);seleccionarIdEstudiante(estudiante.id);}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                      </td>
                </tr>
              ))
          }
        </tbody>
   
      </table>
  
      <Modal isOpen={modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                
                  <span style={{float: 'right'}} onClick={()=>{setModalInsertar(!modalInsertar);vaciarCampos()}}>x</span>
                  <h5 class="modal-title"> {tipomodal==='insertar'? "Insertar Nuevo Estudiante" : "Actualizar Estudiante"}</h5>

                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label className="d-none" htmlFor="id">ID</label>
                    <input className="form-control d-none" type="text" name="id" id="id" readOnly onChange={e => setId(e.target.value)} value={id}/>
                    <br />
                    <label htmlFor="nombre">First Name</label>
                    <input className="form-control" type="text" name="first_name" id="first_name" onChange={e => setFirst_name(e.target.value)} value={first_name}/>
                    <br />
                    <label htmlFor="last_name">Last Name</label>
                    <input className="form-control" type="text" name="last_name" id="last_name" onChange={e => setLast_name(e.target.value)} value={last_name}/>
                    <br/>
                    <label htmlFor="created_at">Created at</label>
                    
                    <DatePicker selected={created_at} onChange={(date) => setCreated_at(date)} dateFormat="yyyy-MM-dd"/>
                    <br/>
                    <br/>
                    <label className="d-none" htmlFor="soft_skills">Soft Skills</label>
                    <input className="form-control d-none" type="text" name="soft_skills" id="soft_skills" onChange={e => setSoft_skills(e.target.value)} value={soft_skills}/>
                    <br/>
                    <label htmlFor="status">Status</label>
                    <input className="form-control" type="text" name="status" id="status" onChange={e => setStatus(e.target.value)} value={status}/>
                    <br/>
                    <label htmlFor="picture">Picture</label>
                    <input className="form-control" type="text" name="picture" id="picture" onChange={e => setPicture(e.target.value)} value={picture}/>
                    <br/>
                    <label className="d-none" htmlFor="work_experience">Work Experience</label>
                    <input className="form-control d-none" type="text" name="work_experience" id="work_experience" onChange={e => setWork_experience(e.target.value)} value={work_experience}/>
                    <br/>
                    <label htmlFor="years_experience">Years Experience</label>
                    <input className="form-control" type="text" name="years_experience" id="years_experience" onChange={e => setYears_experience(e.target.value)} value={years_experience}/>
                    <br/>
                    <label className="d-none" htmlFor="tech_skills">Tech Skills</label>
                    <input className="form-control d-none" type="text" name="tech_skills" id="tech_skills" onChange={e => setTech_skills(e.target.value)} value={tech_skills}/>
                    <br/>
                    <label htmlFor="observations">Observations</label>
                    <input className="form-control" type="text" name="observations" id="observations" onChange={e => setObservations(e.target.value)} value={observations}/>
                    <br/>
                    <label htmlFor="description">Description</label>
                    <input className="form-control" type="text" name="description" id="description" onChange={e => setDescription(e.target.value)} value={description}/>
                    <br/>
                    <label htmlFor="age">Age</label>
                    <input className="form-control" type="text" name="age" id="age" onChange={e => setAge(e.target.value)} value={age}/>
                    <br/>
                    <MultipleValueTextInput
                      onItemAdded={(item, allItems) => {console.log(`Item agregado: ${item}`);elementos_sskill.push(item) }}
                      onItemDeleted={(item, allItems) => {console.log(`Item removed: ${item}`);elementos_sskill=elementos_sskill.filter(function(car) {
                        return car !== item; 
                    });}}
                      label="Soft Skills"
                      name="elementos_sskill"
                      placeholder="Ingrese sus abilidades presione enter despues de cada abilidad"
                      values={elementos_sskill}  

                    />
                    <br/>
                    <MultipleValueTextInput
                      onItemAdded={(item2, allItems) => {console.log(`Item agregado: ${item2}`);elementos_tskill.push(item2) }}
                      onItemDeleted={(item2, allItems) => {console.log(`Item removed: ${item2}`);elementos_tskill=elementos_tskill.filter(function(car2) {
                        return car2 !== item2; 
                    });}}
                      label="Tech Skills"
                      name="elementos_tskill"
                      placeholder="Ingrese sus abilidades presione enter despues de cada abilidad"
                      values={elementos_tskill}  

                    />
                    <br/>
                    <MultipleValueTextInput
                      onItemAdded={(item3, allItems) => {console.log(`Item agregado: ${item3}`);elementos_work.push(item3) }}
                      onItemDeleted={(item3, allItems) => {console.log(`Item removed: ${item3}`);elementos_work=elementos_work.filter(function(car3) {
                        return car3 !== item3; 
                    });}}
                      label="Work Experience"
                      name="elementos_work"
                      placeholder="Ingrese sus abilidades presione enter despues de cada abilidad"
                      values={elementos_work}  

                    />
                  </div>
                </ModalBody>

                <ModalFooter>
                  {tipomodal==='insertar'?
                    <button className="btn btn-success" onClick={() => insertarEstudiante()}>
                      Insertar
                    </button >: <button className="btn btn-primary" onClick={() => actualizarEstudiante()}>
                      Actualizar
                    </button>
                  }
                    <button className="btn btn-danger" onClick={()=>{setModalInsertar(!modalInsertar);vaciarCampos()}}>Cancelar</button>
                </ModalFooter>
          </Modal>

          <Modal isOpen={modalEliminar}>
            <ModalBody>
              Estás seguro que deseas eliminar al estudiante
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={() => eliminarEstudiante()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>{setModalEliminar(!modalEliminar)}}>No</button>
            </ModalFooter>
          </Modal>
  
      </div>
    </div>
  );
}

export default App;
