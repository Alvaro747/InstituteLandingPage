import React,{useState} from "react";
import TextField from "@mui/material/TextField";

const Inputs = ({nombre,txtError,isError,value}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const sendValues =()=>{
    value(selectedValue)
  }
  
  return (
    <div className="col-span-6 sm:col-span-3">
      <TextField
        error={isError}
        onChange={(event) => {
          setSelectedValue(event.target.value);
        }}
        onBlur={sendValues}
        id="outlined-error-helper-text"
        label={nombre}
        helperText={`${txtError}`}
        variant="outlined"
      />
    </div>
  );
};

export default Inputs;
