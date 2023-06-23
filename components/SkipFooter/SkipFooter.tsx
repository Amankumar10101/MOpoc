import Button from "@mui/material/Button";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { ButtonInterface } from '../../app/interface';
import { alpha, styled } from '@mui/material/styles';

const MyButton = styled(Button)((props) => ({
    backgroundColor: props.variant === "contained" ? props.color ? props.color : "#00B7FD" : "transparent",
    borderColor: props.variant === "outlined" ? props.color ? props.color : "#00B7FD" : "none",
    textColor: props.variant === "text" ? props.color ? props.color : "#00B7FD" : "white",
    textTransform: "none",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "10px"

    // width: props.size? props.size: 50  ,
}));

function SkipFooter(props: ButtonInterface) {

    const { onClick } = props;


    return (
        <MyButton
            onClick={onClick}
            sx={{
                // width:width+"px"
                width: "100%"

            }} >Continue</MyButton>
    )
}

export default SkipFooter;