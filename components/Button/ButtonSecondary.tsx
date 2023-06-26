"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { Typography, styled } from "@mui/material";
import styles from "../../app/styles/variables.module.scss";

interface ButtonProps {
    name: string;
    left: string;
    top: string;
}

const Container = styled("div")<ButtonProps>`
position: absolute;
left: ${(props) => props.left};
top: ${(props) => props.top};
`

const ButtonStyle = styled(Button)({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  gap: "10px",
  position: "absolute",
  height: "32px",
  letterSpacing: "0.25px",
  color: "#00B7FD",
  border: "2px solid #00B7FD",
  borderRadius: "5px",
  boxShadow: "none",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontSize: 14,
  lineHeight: "17px",
  backgroundColor: "#0063cc",
  fontStyle: "normal",
  "&:hover": {
    border: "1px solid #00B7FD",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#00B7FD",
    color: "#FFFFFF",
    borderColor: "#005cbf",
  },
});
const ButtonSecondary: React.FC<ButtonProps>= ({
    name,
    left, 
    top,
}) => {
    return (
        <Container left={left} top={top} name={name}>
<ButtonStyle variant="outlined">{name}</ButtonStyle>
        </Container>
    
    );
};
export default ButtonSecondary;
  

