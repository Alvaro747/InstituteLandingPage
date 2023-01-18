import React from "react";
import Layout from "../components/layout/layout";

const Programs = () => {
  return (
    <Layout>
      <section id="program">
        <div className="text-center mt-16">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Bienvenido a nuestra{" "}
            <span classNameName="text-lime-500">sección de programas</span>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Nuestros programas están diseñados para satisfacer las necesidades
            de los estudiantes de todos los niveles, desde principiantes hasta
            estudiantes avanzados.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
          </div>
        </div>
        <div className="relative items-center w-full py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-3">
            <div>
              <div className="p-6 mx-auto">
                <span className="mb-8 text-xs font-semibold tracking-widest text-lime-600 uppercase">
                  FACE TO FACE
                </span>

                <strong className="flex items-end justify-center mx-auto mt-4 mb-8 text-3xl font-black leading-none text-center text-gray-500 lg:text-4xl">
                  Programa Adultos
                </strong>
                <span className="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                  ¡Empieza a dominar el inglés hoy!
                </span>
                <p className="mx-auto mt-12 text-base text-gray-500 lading-relaxed">
                  Ya sea que esté buscando avanzar en su carrera, mejorar sus
                  habilidades de comunicación o simplemente explorar una nueva
                  cultura, nuestro programa ofrece una variedad de opciones que
                  se adaptan a su horario y necesidades.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-lime-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 hover:-translate-y-2"
                  >
                    Aprende más
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 mx-auto">
                <span className="mb-8 text-xs font-semibold tracking-widest text-lime-600 uppercase">
                  FACE TO FACE
                </span>

                <strong className="flex items-end justify-center mx-auto mt-4 mb-8 text-3xl font-black leading-none text-center text-gray-500 lg:text-4xl">
                  Programa Niños
                </strong>
                <span className="mx-auto text-2xl  font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                  ¡Libera tu potencial de inglés ahora!
                </span>
                <p className="mx-auto mt-12 text-base text-gray-500 lading-relaxed">
                  Entendemos la importancia de brindar un entorno de aprendizaje
                  seguro y de apoyo para los niños, y nuestro programa está
                  diseñado para garantizar que todos los niños se sientan
                  cómodos y seguros. Dele a su hijo el regalo de un nuevo idioma
                  y únase a nuestra comunidad de jóvenes estudiantes de idiomas
                  hoy mismo
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-lime-600 rounded-xl hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 hover:-translate-y-2"
                  >
                    Aprende más
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 mx-auto">
                <span className="mb-8 text-xs font-semibold tracking-widest text-lime-600 uppercase">
                  FACE TO FACE
                </span>

                <strong className="flex items-end justify-center mx-auto mt-4 mb-8 text-3xl font-black leading-none text-center text-gray-500 lg:text-4xl">
                  Programa Examenes
                </strong>
                <span className="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                  Explora nuestras opciones
                </span>
                <p className="mx-auto mt-12 text-base text-gray-500 lading-relaxed">
                  Nuestro programa está diseñado para brindarle las herramientas
                  y estrategias que necesita para tener éxito en su examen de
                  dominio del idioma. Entendemos la importancia de lograr el
                  puntaje deseado y estamos comprometidos a brindarle la mejor
                  preparación posible.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-lime-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-2"
                  >
                    Aprende más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
