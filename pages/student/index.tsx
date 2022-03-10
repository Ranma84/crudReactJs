import Table from "../../components/Student/Table";
import DefaultLayout from '../../layout/DefaultLayout';
import { getSession } from 'next-auth/client';
import { IoMdCreate, IoMdTrash, IoMdSend } from "react-icons/io";
import styles from "../../styles/table.module.css";



export default function Tablas(){
  return(
    <div>
    <DefaultLayout>
            <div>
              <h2>Student</h2>
                <p>
                  <a href="/student/new">
                  Sign in Student
                  </a>
                </p>
            </div> 
            <div>
              <div className="position-relative sticky-top center mb-3">
                <input placeholder="Buscador" type="search" className="w-100 ps-3 p-2 shadow  rounded-fz" />
                <button className={`${styles['btn-search']} b-primary rounded-circle center `}><IoMdSend  size={25} /></button>
              </div>
            </div>
      <Table />
    </DefaultLayout>     
    </div>
  );

};