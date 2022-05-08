import * as React from 'react';



export default function BasicDatePicker(props) {


  return (
   
    <div >
        <label>{props.label}</label>
         <input 
        type={props.type}
         
        onChange={props.onChange}
         ></input>
    </div>
  );
}

;
