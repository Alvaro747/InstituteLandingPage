import React from "react";
import Layout from "../components/layout/layout";

const Clients = () => {
  return (
    <Layout>
      <section id={'comentarios'} className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Lo que nuestros estudiantes{" "}
            <span className="text-lime-500 ">dicen</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Los clientes están satisfechos con la experiencia y dedicación de
            nuestro equipo de profesores, lo que les ha permitido sentirse
            seguros y confiados al hablar inglés.
          </p>

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-500 dark:text-gray-300">
                "Gracias a Face To Face hoy en día cuento con una de las mejores
                experiencias de mi vida donde pude conocer, vivir y trabajar en
                Estados Unidos"
              </p>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="font-semibold text-lime-500">
                    Yarith Sarmiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-500 dark:text-gray-300">
                "Gracias a Face To Face me encuentro en este momento en
                Argentina estudiando en una de las mejores universidades de
                latinoamerica."
              </p>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="font-semibold text-lime-500">Santiago Herrera</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
