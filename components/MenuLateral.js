import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image';
import axios from 'axios';


function MenuLateral(props) {

  const parametro=props.rol_id;
  console.log(parametro);
  let [menus,setMenus]=useState([]);
  
    //const router = useRouter();
 
   
    axios.post('http://localhost/saauditoriaI/public/menu', {

      rol: parametro,

    }
    ).then(function (response) {
      
      setMenus(response.data.menus);

    })
    .catch(function (error) {
      console.log(error);
    });
    

 
  return(<div className="relative min-h-screen md:flex">

  <div className="bg-gray-900 text-gray-100 flex justify-between md:hidden">

    <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>


  <div className="sidebar bg-gray-900 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
    <span className="text-2xl">Menu lateral</span>  
    <nav>
      { 
        menus.map(menu => (
            <Link href={menu.url}>
              <a key={menu.id} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                {menu.nombre_menu}
              </a>
            </Link>
          ))
      }
    </nav>
  </div>

</div>

  

);

}
export default MenuLateral;
