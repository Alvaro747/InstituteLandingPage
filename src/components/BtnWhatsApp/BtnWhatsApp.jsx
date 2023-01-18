import React from "react";
import logWhastApp from "../../assets/logSocialmedia/whatsapp-3.svg";

const BtnWhatsApp = () => {
  return (
    <div className="fixed right-10 bottom-10 animate-waving-hand">
      <a href="https://api.whatsapp.com/send?phone=%2B57+3002105164&text=%F0%9F%93%9E+%C2%A1Hola%21+%F0%9F%98%83+Quisiera+hablar+con+un+asesor+para+recibir+m%C3%A1s+informaci%C3%B3n+sobre+el+curso+de+ingl%C3%A9s.%F0%9F%93%9A+%C2%BFPodr%C3%ADan+ponerme+en+contacto+con+alguien+para+programar+una+sesi%C3%B3n+de+orientaci%C3%B3n%3F+%F0%9F%97%93%EF%B8%8F+Estoy+ansioso%2Fa+de+mejorar+mis+habilidades+en+ingl%C3%A9s.%F0%9F%9A%80+%C2%A1Gracias%21" target={'_blank'}>
        <img src={logWhastApp} alt="" className="h-20" />
      </a>
    </div>
  );
};

export default BtnWhatsApp;
