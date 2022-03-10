import React from "react";
import { useState } from 'react'
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import MenuLateral from "../components/MenuLateral";



export default function Otraprueba() {

  return (    
    <Layout>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-end-1" ><MenuLateral></MenuLateral></div>
        <div className="col-start-2 col-span-5">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3"> 

          Tu madre en pelotas
        </div>
        </div>
      </div>
    </Layout>
  )
}
