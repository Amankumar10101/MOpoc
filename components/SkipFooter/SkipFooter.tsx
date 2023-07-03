
import Button from "@mui/material/Button";
<<<<<<< HEAD
import { ButtonInterface } from '../../app/interface';
import { styled } from '@mui/material/styles';
import './skipFooter.scss';
=======
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { IButtonInterface } from '../../app/interface';
import { alpha, styled } from '@mui/material/styles';
import './skipFooter.css';
>>>>>>> 7468a4de3458e8cc251b39338a16ad2a20544d61

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