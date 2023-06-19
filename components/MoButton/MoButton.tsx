import "./MoButton.css";
import Button from "@mui/material/Button";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import {ButtonInterface} from '../../app/interface';
import { alpha, styled } from '@mui/material/styles';

const MyButton = styled(Button)((props) => ({
    backgroundColor: props.variant==="contained"?props.color? props.color: "#00B7FD":"transparent",
    borderColor: props.variant=== "outlined"?props.color? props.color:"#00B7FD": "none",
    textColor: props.variant==="text"? props.color? props.color:"#00B7FD": "white",
    textTransform: "none",
    paddingTop:"10px",
    paddingBottom:"10px"
   
    // width: props.size? props.size: 50  ,
  }));

function MoButton(props: ButtonInterface){
   
    const {variant,type,width,color, name}=props;
    

return (
    <MyButton sx={{
        width:width+"px"
    }} variant={variant} color="secondary"   type={type}>{name}</MyButton>
)
}

export default MoButton;