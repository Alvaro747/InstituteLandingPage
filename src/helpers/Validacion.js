import { useState } from "react"

const validate = (name,
    lastname,
    email,
    cel,
    municipio,
    departamento)=>{

      //validacion mensaje Error
      const [txtErrorName, setTxtErrorName] = useState('');
      const [txtErrorLastName, setTxtErrorLastName] = useState('');
      const [txtErrorEmail, setTxtErrorEmail] = useState('');
      const [txtErrorCel, setTxtErrorCel] = useState('');
      const [txtErrorMunicipio, setTxtErrorMunicipio] = useState('');
      const [txtErrorDepartamento, setTxtErrorDepartamento] = useState('');

      //Datos Validados 

      const [validateName, setValidateName] = useState('');
      const [validateLastName, setValidateLastName] = useState('');
      const [validateEmail, setValidateEmail] = useState('');
      const [validateCel, setValidateCel] = useState('');
      const [validateMunicipio, setValidateMunicipio] = useState('');
      const [validateDepartamento, setValidateDepartamento] = useState('');


        if ( 3 <= name.length <= 30 && 3 <= lastname.length <= 30 && name !== null && municipio !== null && departamento !== null){
          setValidateName(name)  
          setValidateLastName(lastname)
          setValidateMunicipio(municipio)
          setValidateDepartamento(departamento) 
        }else{
          
        }

    

        



    }

validate(alvaro,bernal,alvaro,322,am,add)


  

