import React from "react";
import Layout from "../../components/layout/layout";

const Stadistics = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="text-center mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Nuestras Estadisticas
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Estamos orgullosos de compartir con ustedes el desempeño y el éxito
            de nuestro programa a través de las estadísticas presentadas en esta
            sección.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
          </div>
        </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4  w-1/3">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Estudiantes</p>
            </div>
            <div className="p-4 w-1/3">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Tasa de graduacion</p>
            </div>
            <div className="p-4  w-1/3">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stadistics;
