import React,{useState} from 'react'
import TextField from "@mui/material/TextField";

const InputEmail = ({nombre,txtError,isError,value}) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const sendValue=()=>{
        value(selectedValue)
    }
  return (
    <div className="col-span-6 sm:col-span-6">
    <TextField
      fullWidth
      error={isError}
      label={nombre}
      id="fullWidth"
      onChange={(e=>{
        setSelectedValue(e.target.value)
      })}
      onBlur={sendValue}

      helperText={txtError}
      variant="outlined"

    />
  </div>

  )
}

export default InputEmail