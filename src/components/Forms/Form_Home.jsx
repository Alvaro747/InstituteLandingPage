import React, { useState, useEffect } from "react";

import { useOptions } from "../../hoocks/useOptions";
import Departaments from "../autocomplete/Departaments";
import Municipios from "../autocomplete/Municip";
import Inputs from "../inputs/Inputs";
import { setArrayMunicip } from "../../helpers/setMunicipios";
import InputEmail from "../inputs/InputEmail";
import BtnEnviar from "../Btn/BtnEnviar";

const Form_Home = () => {
  const dep = useOptions();
  const [valueName, setvalueName] = useState(null);
  const [valueLastName, setvalueLastName] = useState(null);
  const [valueEmail, setvalueEmail] = useState(null);
  const [valueCel, setValueCel] = useState(null);
  const [valueMunicipio, setValueMunicipio] = useState(null);
  const [departament, setDepartament] = useState(null);
  const [munic, setMunic] = useState(null);

  const getValueDep = (datos) => setDepartament(datos);
  const getValueMunicip = (datos) => setValueMunicipio(datos)
  const getValueName = (datos) => setvalueName(datos);
  const getValueLastName = (datos) => setvalueLastName(datos);
  const getValueEmail = (datos) => setvalueEmail(datos);
  const getValueCel = (datos) => setValueCel(datos)

  useEffect(() => {
    const listMunicipios = setArrayMunicip(departament);
    setMunic(listMunicipios);
  }, [departament]);

  return (
    <div className="mt-10 sm:mt-0 border shadow-2xl bg-white">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="md:col-span-2">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900 text-center mt-7 animate-bounce">
              Quiero mas Informacion!
            </h3>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <Inputs
                    nombre="Nombre"
                    txtError={valueName}
                    isError={false}
                    value={getValueName}
                  />
                  <Inputs
                    nombre="Apellido"
                    txtError={valueLastName}
                    isError={false}
                    value={getValueLastName}
                  />
                  <Departaments opciones={dep} value={getValueDep} />
                  <Municipios opciones={munic} txtError={valueMunicipio} value={getValueMunicip} />
                  <InputEmail
                    nombre="Email"
                    txtError={valueEmail}
                    isError={false}
                    value={getValueEmail}
                  />
                  <Inputs
                    nombre="Celular"
                    txtError={valueCel}
                    isError={false}
                    value={getValueCel}
                  />
                </div>
              </div>
              <div className=" px-4 py-3  text-center sm:px-6">
                <BtnEnviar nombre={valueName} apellido={valueLastName} celular={valueCel} departamento={departament} ciudad={valueMunicipio} email={valueEmail}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form_Home;
