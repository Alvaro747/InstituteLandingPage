import React from "react";
import Form_Home from "../../components/Forms/Form_Home";
import Layout from "../../components/layout/layout";
import iconFacebook from "../../assets/logSocialmedia/facebook.svg";
import iconInstagram from "../../assets/logSocialmedia/instagram.svg";
import iconTiktok from "../../assets/logSocialmedia/tiktok.svg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (

    <Layout>
      <div id={"home"}className=" bg-lime-300 pt-[40px] pb-[110px] lg:pt-[50px] w-auto">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap p-6">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <div className=" relative  h-48 mb-3 px-6 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                  <TypeAnimation
                    sequence={[
                      "¿Quieres mejorar tu inglés rápidamente?",
                      1000,
                      "",
                    ]}
                    omitDeletionAnimation = {true}
                    speed={10}
                    wrapper="h1"
                    repeat={Infinity}
                  />
                </div>
                <p className="mb-8 max-w-[480px] text-base text-body-color text-center">
                  Nuestro curso intensivo de inglés está diseñado para ayudarte
                  a progresar rápidamente en poco tiempo. Con nuestro enfoque
                  inmersivo, estarás hablando como un nativo en poco tiempo.
                </p>
                <ul className="flex items-center justify-center sm:mb-10 mb-5 ">
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=%2B57+3002105164&text=%F0%9F%93%9E+%C2%A1Hola%21+%F0%9F%98%83+Quisiera+hablar+con+un+asesor+para+recibir+m%C3%A1s+informaci%C3%B3n+sobre+el+curso+de+ingl%C3%A9s.%F0%9F%93%9A+%C2%BFPodr%C3%ADan+ponerme+en+contacto+con+alguien+para+programar+una+sesi%C3%B3n+de+orientaci%C3%B3n%3F+%F0%9F%97%93%EF%B8%8F+Estoy+ansioso%2Fa+de+mejorar+mis+habilidades+en+ingl%C3%A9s.%F0%9F%9A%80+%C2%A1Gracias%21"
                      target={'_blank'}
                      className="inline-flex items-center justify-center rounded-lg bg-orange-500 py-2 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10 animate-waving-hand"
                    >
                      Saber más
                    </a>
                  </li>
                </ul>
                <h6 className="mb-3 mt-8 sm:mt-4 ml-3 sm:text-xl text-lg  font-semibold text-body-color">
                  Encuentranos en nuestras redes sociales
                </h6>
                <div className="clients  bg-gray-50 shadow-2xl rounded-2xl p-2 flex flex-col text-center">
                  <div className="flex items-center p-1">
                    <div className="w-full flex justify-center ">
                      <a href="https://www.facebook.com/institutofacetoface" target={'_blank'}>
                      <img
                        src={iconFacebook}
                        className="w-12 hover:shadow-2xl hover:-translate-y-2 transition ease-in-out hover:cursor-pointer "
                        alt="facebook"
                      />
                      </a>
                    </div>
                    <div className="w-full flex justify-center ">
                      <a href="https://www.instagram.com/institutofacetoface/" target={'_blank'}>
                      <img
                        src={iconInstagram}
                        className="w-12 hover:shadow-2xl hover:-translate-y-2 transition ease-in-out hover:cursor-pointer"
                        alt="instagram"
                      />
                      </a>
                    </div>
                    <div className="w-full flex justify-center">
                      <a href="https://www.tiktok.com/@instituto_facetoface" target={'_blank'}>
                      <img
                        src={iconTiktok}
                        className="w-12 hover:shadow-2xl hover:-translate-y-2 transition ease-in-out hover:cursor-pointer"
                        alt="tiktok"
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden  lg:block lg:w-1/12"></div>
            <div className="w-full lg:w-5/12">
              <Form_Home />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
