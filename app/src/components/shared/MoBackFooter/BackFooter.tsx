
import Button from "@mui/material/Button";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import {IButtonInterface } from '../../../../interface';
import { alpha, styled } from '@mui/material/styles';
import './BackFooter.css';

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

function BackFooter(props: IButtonInterface) {

    const { onBackClick } = props;


    return (
        <div className="reset-action-button">
            <MyButton
                onClick={onBackClick}
                variant="outlined"
                sx={{
                    // width:width+"px"
                    width: "10%"

                }} >Back</MyButton>
        </div>

    )
}

export default BackFooter;