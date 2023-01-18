import React from "react";
import Layout from "../components/layout/layout";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';

const CtaFooter = () => {
  return (
    <Layout> 
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            Regístrate para recibir <span className="pl-10">promociones y ofertas.</span>
          </h2>

          <div className="mt-8 lg:mt-0 px-5" >
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <TextField
                fullWidth
                label="Email"
                id="fullWidth"
                variant="outlined"
              />
              <button className="sm:w-40 w-24 h-10 sm:h-14 transition-colors duration-300 transform bg-lime-500 rounded-lg focus:ring focus:ring-lime-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-lime-600 focus:outline-none focus:bg-lime-600">
              <SendIcon className="text-white"/>
              </button>
            </div>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
              Ingresa tu correo electrónico para recibir promociones exclusivas
              y estar al tanto de nuestras últimas ofertas.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CtaFooter;
