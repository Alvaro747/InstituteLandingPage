import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Municipios = ({opciones,txtError,value}) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const sendMunicipios = ()=>{
      value(selectedValue)
    }
   
  return (
    <div className="col-span-6 sm:col-span-3">
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={opciones}
      value={selectedValue}
      onChange={(event, newValue) => {
        setSelectedValue(newValue);
      }}
      onBlur={sendMunicipios}
      sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Municipio" helperText={txtError} />
      )}
    />
  </div>
  )
}

export default Municipios