import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AlertContext } from "../context/Alert/alertContext";
import { FireBaseContext } from "../context/FireBase/FireBaseContext";

const Form = () => {
  const [inpVal, setInpVal] = useState('');
  const {show} = useContext(AlertContext);
  const firebase=useContext(FireBaseContext);

  const submitHadler=event=>{
    event.preventDefault();
    if(inpVal.trim()){
      firebase.addNote(inpVal.trim());
      show(inpVal,'success');
      setInpVal('');
    }else{
      show(null);
    }
  }
  return (
    <form onSubmit={submitHadler}>
      <div className="form-group">
        <input
          value={inpVal}
          onChange={(event) => setInpVal(event.target.value)}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};

export default Form;
