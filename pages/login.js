import React, { useEffect } from "react";
import { useState, useRef } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Logo } from "../ui/Logo";
import axios from "axios";
import { getSession } from 'next-auth/client';
import Image from 'next/image'


export function Login() {

  const router = useRouter();
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const router2 = useRouter();
 
  ///Para bloquiar el login en caso de que este logiado///
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router2.replace('/tablero');
      } else {
        setIsLoading(false);
      }
    });
  }, [router2]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  /////////////////////////////////////

  
 async function submitHandler() {

  const correo=emailInputRef.current.value;
  const contrasenia=passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: correo,
        password: contrasenia,
      });

      console.log(result);
      if (!result.error) {
        // set some auth state
        router.replace('/tablero');
      }
    } 
}

  return (
    <div className="flex flex-col justify-center items-center px-3 bg-white dark:bg-gray-600 min-h-screen">
      <div className="w-full max-w-screen-xl">
        <div className="block md:flex flex-wrap items-center -mx-2">
          <div className="w-full md:w-1/2 px-2 text-center order-last flex justify-center">
            <div className="w-full md:max-w-md p-2 d-lg-block d-none">
              <img src="/images/illustrations/undraw_Group_chat_unwm.svg" className="w-64 md:w-full h-64 md:h-auto  inline-block"/>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <div className="text-center mb-5 text-indigo-500">
                {/* <Logo height={50} width={50} /> */}
                <Image src="/assets/img/califi-logo.svg" width={300} height="auto" />
              </div>
              <form action="/">
                <div className="text-center mb-5">
                  <h1 className="uppercase text-2xl mb-3 font-bold leading-none text-green-550">
                      Login
                  </h1>
                  <p className="text-gray-800"></p>
                </div>
                <div className="rounded-lg shadow-sm">
                  <div className="block mb-3">
                    <label>Correo Electrónico</label>
                    <input
                      ref={emailInputRef}
                      name="email"
                      type="text"
                      id="email"
                      required
                      className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none"
                      placeholder="Ingrese su correo electrónico"
                    />
                  </div>
                  <div className="block mb-3">
                    <label>Contraseña</label>
                    <input
                      ref={passwordInputRef}
                      aria-label="password"
                      name="password"
                      id="password"
                      type="password"
                      required
                      className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none"
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                </div>

                <div className="d-grid mb-2">
                  <button
                    onClick={submitHandler}
                    className="btn btn-primary btn-custom shadow-md"
                    type="button"
                  > Aceptar
                  </button>
                </div>
              </form>
              {/* <div className="text-center mb-5 text-indigo-500">
              <Image src="/SAMBITO.png" alt="Vercel Logo" width={150} height={46} />
              <Image src="/RISK.png" alt="Vercel Logo" width={78} height={35} />
              </div> */}
            </div>
            <div>      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
