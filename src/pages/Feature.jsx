import React from "react";
import Layout from "../components/layout/layout";
import imgFace from "../assets/Img_Feature.png";
import imgNequi from '../assets/logFormasdepago/nequi-2.svg'
import imgDaviplata from '../assets/logFormasdepago/daviplata-2.svg'
import imgMastercard from '../assets/logFormasdepago/mastercard-2.svg'
import imgVisa from '../assets/logFormasdepago/visa.svg'
import imgEfecty from '../assets/logFormasdepago/efecty.svg'
import EditIcon from '@mui/icons-material/Edit';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import WorkIcon from '@mui/icons-material/Work';

const Feature = () => {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                  Razones principales para elegirnos
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 bg-lime-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-lime-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-lime-500 rounded-full"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-lime-500 bg-lime-100 rounded-xl md:mx-4 ">
                 <EditIcon/>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Calidad de enseñanza
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Contamos con un personal docente altamente calificado y
                    experimentado que brinda una enseñanza de alta calidad y
                    ayuda a los estudiantes a alcanzar sus objetivos de
                    aprendizaje del idioma.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-lime-500 bg-lime-100 rounded-xl md:mx-4 ">
                 <LocalAirportIcon/>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Mejora en la experiencia de viaje
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    El dominio del inglés les permite a los estudiantes viajar
                    con mayor libertad y confianza, ya que les permite
                    comunicarse con las personas en su destino de viaje y
                    disfrutar de las experiencias culturales.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-lime-500 bg-lime-100 rounded-xl md:mx-4">
                  <WorkIcon/>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Mejora en el ámbito laboral
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Aprender inglés puede ayudar a los estudiantes a mejorar sus
                    oportunidades laborales ya que muchas empresas requieren a
                    sus empleados hablar inglés para comunicarse con clientes y
                    colaboradores internacionales.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src={imgFace}
                alt=""
              />
            </div>
          </div>

          <div className="my-12 border-gray-200 dark:border-gray-700"></div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
             <img src={imgMastercard} alt="" className="sm:h-16 h-14"/>
            </div>
            
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={imgVisa} alt="" className="sm:h-40 h-28"/>
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={imgEfecty} alt="" className="sm:h-36 h-24"/>
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img src={imgNequi} alt="" className="sm:h-44 h-32"/>
            </div>

            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
            <img src={imgDaviplata} alt="" className="sm:h-48 h-40" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Feature;
