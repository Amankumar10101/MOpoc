import Button from "@mui/material/Button";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import {IButtonInterface} from '../../../src/interfaces/components/Button';
import { alpha, styled } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/src/styles/theme";

const MyButton = styled(Button)((props) => ({
    backgroundColor: props.variant==="contained"?props.color? props.color: "#00B7FD":"transparent",
    borderColor: props.variant=== "outlined"?props.color? props.color:"#00B7FD": "none",
    textColor: props.variant==="text"? props.color? props.color:"#00B7FD": "white",
    textTransform: "none",
    paddingTop:"10px",
    paddingBottom:"10px",
    marginTop:"10px"
   
    // width: props.size? props.size: 50  ,
  }));

function MoButton(props: IButtonInterface){
   
    const {variant,type,width,color, name, className, onClick}=props;
    

return (
    <ThemeProvider theme={theme}>
    <MyButton className={className}
    onClick={onClick}
     sx={{
        // width:width+"px"
        width: width,
        
    }} variant={variant}    type={type}>{name}</MyButton>
    </ThemeProvider>
)
}

export default MoButton;