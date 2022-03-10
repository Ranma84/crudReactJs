import React from "react";
import { useState } from 'react'
import { useRouter } from "next/router";
import MenuLateral from "../components/MenuLateral";
import { getSession } from 'next-auth/client';
import DefaultLayout from '../layout/DefaultLayout';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Baroptions1 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Grafico 2',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

export const Bardata1 = {
  labels,
  datasets: [
    {
      label: 'Primero',
      data: labels.map(() => (Math.random() * (1000))),
      backgroundColor: 'rgba(0,0,255, 0.5)',
    },
    {
      label: 'Segundo',
      data: labels.map(() => Math.random() * (1000)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export default function Home(props) {

  console.log(props)
  console.log(props.session);
  return (
    <DefaultLayout>
      <div className="">
        {/* <div className="col-start-1 col-end-1" ><MenuLateral email={props.session.user.email} rol_id={props.session.user.image}></MenuLateral></div> */}
        <div><h2 className="">Dashboard</h2></div>
        <div className="row">
          <div className="col-md-4 p-2">
            <div className="rounded-fz p-2 shadow bg-white">
              <Bar options={Baroptions1} data={Bardata1} />
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="rounded-fz p-2 shadow bg-white">
              <Bar options={Baroptions1} data={Bardata1} />
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="rounded-fz p-2 shadow bg-white">
              <Bar options={Baroptions1} data={Bardata1} />
            </div>
          </div>
        </div> 
         <div className="row">
            <div className="col-md-8 col-12 p-2"><div className="rounded-fz p-2 shadow bg-white">
              <Bar options={Baroptions1} data={Bardata1} />
            </div></div>
            <div className="col-md-4 col-12 p-2"><div className="rounded-fz p-2 shadow bg-white">
              <Bar options={Baroptions1} data={Bardata1} />
            </div></div>
            <div className="col-md-12 col-12 mt-1 p-2"><div className="rounded-fz p-2 shadow bg-white">
              <Bar options={Baroptions1} data={Bardata1} />
            </div></div>
          </div>
      </div>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}