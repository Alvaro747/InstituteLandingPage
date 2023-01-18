import React from "react";
import useFetch from "../../hoocks/useFetch";



const BtnEnviar = ({nombre,apellido,departamento,ciudad,email,celular}) => {
  return (
    <button
      type="submit"
      onClick={(e)=>{
        e.preventDefault()
        console.log(`${nombre} ${apellido} ${departamento} ${ciudad} ${email} ${celular}`)
        useFetch(nombre, apellido,departamento,ciudad,email,celular)
      }}
        

      className="inline-flex justify-center items-center rounded-md border 
                  border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm
                   hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                   hover:shadow-2xl hover:-translate-y-2 transition ease-in-out hover:cursor-pointer"
    >
      Comenzar ahora
    </button>
  );
};

export default BtnEnviar;
