import Button from "@mui/material/Button";

import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { IButtonInterface } from '../../../../interface';
import { alpha, styled } from '@mui/material/styles';
import './skipFooter.scss';


const MyButton = styled(Button)((props) => ({
    backgroundColor: props.variant === "contained" ? props.color ? props.color : "#00B7FD" : "transparent",
    borderColor: props.variant === "outlined" ? props.color ? props.color : "#00B7FD" : "none",
    textColor: props.variant === "text" ? props.color ? props.color : "#00B7FD" : "white",
    textTransform: "none",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "10px"
}));

function SkipFooter(props: IButtonInterface) {

    const { onContinueClick, onBackClick } = props;


    return (
        <div className="signUp-action-button">
            <MyButton
                onClick={onBackClick}
                variant="contained"
                sx={{
                    // width:width+"px"
                    width: "10%"

                }} >Back</MyButton>
            <MyButton
                onClick={onContinueClick}
                variant="contained"
                sx={{
                    // width:width+"px"
                    width: "10%"

                }} >Continue</MyButton>
        </div>

    )
}

export default SkipFooter;