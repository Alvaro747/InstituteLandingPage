
import { colombia } from '../api/departamentos'
import React, {useState,useEffect} from 'react';



export const useOptions = () => {
    const [departament, setDepartament] = useState(null);
    const departam=[]
    const departamento = () =>{
        for (let i in colombia){
        let depItem = colombia[i].departamento
        departam.push(depItem)
    }
    setDepartament(departam)

}
useEffect(() => {
    departamento()
}, []);

return departament

}
