import { colombia } from '../api/departamentos'




export const setArrayMunicip = (departamento) => {
    if(departamento){
    const municipio = (colombia.filter((item)=>item.departamento === departamento))
    return municipio[0].ciudades
    }
    return []
    
}

