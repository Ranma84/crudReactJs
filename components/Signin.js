import { Card, CardBody, Link, Logo, Ripple } from "ui";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Illustration from "public/images/illustrations/undraw_Group_chat_unwm.svg";
import { useTranslation } from "i18n";

const Signin = () => {
    const { t } = useTranslation("signin");

    const router = useRouter();
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const [error, setError] = React.useState(null);
    const [error2, setError2] = React.useState(null);

    const  url=process.env.URL;

      function logearse() {

      const correo=emailInputRef.current.value;
      const contrasenia=passwordInputRef.current.value;
      
      if(correo=='' && contrasenia==''){
        setError(t("falta_datos"));
        return -1;
      }

      if(correo==''){
        console.log(t("falla_login"));
        setError(t("falta_datos"));
        setError2(null);
        return -1;
      }
      if(contrasenia==''){
        console.log(t("falla_login"));
        setError(t("falta_datos"));
        setError(null);
        return -1;
      }

      axios.post(url+'login', {
          email: correo,
          password: contrasenia
      }
      ).then(function (response) {
        console.log(response.data);
        setError2(null);
        router.push({pathname: "/tablero",query: {
          email: response.data.email,
          user: response.data.user,
          rol: response.data.rol,
          estado: response.data.estado,
          token : response.data.token
        }});
      })
      .catch(function (error) {
        console.log(error);
        console.log(t("noauthorization"));
        setError2(t("falla_login"));
        setError(null);
      });
    }

  return (
    <div className="flex flex-col justify-center items-center px-3 bg-white dark:bg-gray-600 min-h-screen">
      <div className="w-full max-w-screen-xl">
        <div className="block md:flex flex-wrap items-center -mx-2">
          <div className="w-full md:w-1/2 px-2 text-center order-last flex justify-center">
            <div className="w-full md:max-w-md p-2">
              <Illustration className="w-64 md:w-full h-64 md:h-auto  inline-block" />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <div className="text-center mb-5 text-indigo-500">
                <Logo height={50} width={50} />
              </div>
              { error2 ? (
                  <div className="mb-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline"> {error2}</span>
                  </div>
                ) : null
              }
              <form action="/">
                  {
                      error ? (
                          <div >
                              <p className="text-red-500">{error}</p>
                          </div>
                      ) : null
                  }
                <div className="text-center mb-5">
                  <h1 className="uppercase text-2xl mb-3 font-bold leading-none text-indigo-500">
                    {t("title")}
                  </h1>
                  <p className="text-gray-800">{t("subtitle")}</p>
                </div>

                <div className="rounded-lg shadow-sm">
                  <div className="block mb-3">
                    <label>{t("emailAddress")}</label>
                    <input
                      aria-label={t("emailAddress")}
                      name="email"
                      type="text"
                      id="email"
                      required
                      className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none"
                      placeholder={t("emailAddress")}
                    />
                  </div>
                  <div className="block mb-3">
                    <label>{t("password")}</label>
                    <input
                      aria-label={t("password")}
                      name="password"
                      id="password"
                      type="password"
                      required
                      className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none"
                      placeholder={t("password")}
                    />
                  </div>
                </div>

                <button
                  className="shadow-sm relative w-full flex justify-center py-3 px-4 border border-transparent text-sm rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mb-3 leading-none"
                  onClick={logearse}
                  type="button"
                >
                  {t("signinButton")}
                  <Ripple />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
