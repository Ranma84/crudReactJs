/*
import Charts from "/components/Charts";

const ChartsPage = () => <Charts />;

ChartsPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default ChartsPage;
*/

import React from "react";
import { useState } from 'react'
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import MenuLateral from "../components/MenuLateral";
import { getSession } from 'next-auth/client';

import { Card, CardBody, Chart, Loading } from "../ui";

import { fetcher } from "../lib";
import useSWR from "swr";


export default function Home(props) {

  const { data, error } = useSWR('/api/chart', fetcher);

  if (error)
    return (
      <div className="flex items-center justify-center h-full">
        Failed to load chart data
      </div>
    );
  if (!data)
    return (
      <div className="flex items-center justify-center h-full">
        <Loading />
      </div>
    );

  return (  
    <Layout>  
    <div className="grid grid-cols-6 gap-4">
    <div className="col-start-1 col-end-1" ><MenuLateral email={props.session.user.email} rol_id={props.session.user.image}></MenuLateral></div>
    <div className="col-start-2 col-span-5">
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3"> 

      {data.map((chart, index) => (
        <div className="w-full  px-2" key={index}>
        <Card>
            <div className="flex items-center content-between px-4 py-4 border-b border-solid border-gray-100 dark:border-gray-700">
            </div>
            <CardBody>
              <Chart
                type={chart.type}
                data={chart.data}
                height={chart.height}
                options={chart.options}
              />
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
    </div>
    </div>
    </Layout>
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