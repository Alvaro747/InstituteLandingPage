import axios from "axios";
import { useEffect } from "react";


const useFetch = async(
    nombre,apellido,departamento,ciudad,email,celular
) => {
  const data = {
    "text" : `Nombre: ${nombre} \n 
    Apellido:  ${apellido} \n 
    Correo:  ${email} \n 
    Celular:  ${celular} \n 
    Municipio  ${ciudad} \n 
    Departamento  ${departamento} \n`,

    
  };
  console.log(data)
  const URL = 'https://hooks.slack.com/services/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'

  let response = await fetch(URL, {
    method: 'POST',
    mode: 'no-cors',
    credentials:'omit',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

 console.log(response)



  
  
  
};

export default useFetch;
