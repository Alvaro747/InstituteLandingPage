import React from "react";

const Cta = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
          ¡Inscríbete hoy y comienza tu viaje hacia el{" "}
          <span className="text-lime-500">dominio del idioma!</span>
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Aprender inglés no tiene que ser aburrido. En nuestro instituto de
          inglés, ofrecemos un ambiente divertido y amigable para que puedas
          aprender de efectiva. Ofrecemos una amplia variedad
          de cursos desde principiante hasta avanzado, para todas las edades y
          niveles de aprendizaje.
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <a
            href="#"
            className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-lime-500 rounded-lg hover:bg-lime-600 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Inscríbete ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
