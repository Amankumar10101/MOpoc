// @ts-nocheck
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import {ButtonInterface} from '../../app/interface';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { alpha, styled } from '@mui/material/styles';
import { MyTypography } from "../MoCard/MoCard";

const MyFormControl = styled(FormControlLabel)((props) => ({
    
"& .MuiTypography-body1": {
    color: "#585858",
    fontSize: "0.8rem"
},
// "& MuiButtonBase-root.Mui-checked":{
//     border: "1px solid green"
// }
 
    // width: props.size? props.size: 50  ,
  }));

interface CheckboxInterface{
    label?: string,
    name?: string,
    className?:string,
    onChange:  ( name : string,value: boolean)=>void,
}
function MoCheckbox(props: CheckboxInterface){
   
   const {label, name}=props;
   const [checked, setChecked] = useState(false);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    props.onChange(name, event.target.checked);
  };
    

return (
    <MyFormControl
   
     control={<Checkbox   checked={checked}  />} label={label} onChange={handleChange}/>
     
)
}

export default MoCheckbox;