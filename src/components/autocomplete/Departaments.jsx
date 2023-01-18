import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




const Departaments = ({opciones,value}) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const valueDep = ()=>{
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
      onBlur={valueDep}
      sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Departamento" helperText={selectedValue} />
      )}
    />
  </div>
  )
}

export default Departaments