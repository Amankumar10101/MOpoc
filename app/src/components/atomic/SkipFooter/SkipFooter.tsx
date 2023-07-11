import Button from "@mui/material/Button";
import { IButtonInterface } from "../../../interfaces/components/Button";
import { styled } from "@mui/material/styles";
import "../../../styles/components/atomic/SkipFooter.scss";

const MyButton = styled(Button)((props) => ({
  backgroundColor:
    props.variant === "contained"
      ? props.color
        ? props.color
        : "#00B7FD"
      : "transparent",
  borderColor:
    props.variant === "outlined"
      ? props.color
        ? props.color
        : "#00B7FD"
      : "none",
      color:
    props.variant === "contained"
      ? "white"
      : props.variant === "outlined"
      ? "#00B7FD"
      : "inherit",
  textTransform: "none",
  paddingTop: "10px",
  paddingBottom: "10px",
  fontSize: '0.875rem',
  fontWeight: '500',
  marginTop: "10px",
  borderRadius: '0.3125rem',
}));

function SkipFooter(props: IButtonInterface) {
  const { onContinueClick, onBackClick } = props;

  return (
    <div className="signUp-action-button">
      <MyButton
        onClick={onBackClick}
        variant="outlined"
       
        sx={{
          // width:width+"px"
          width: "10%",
        }}
      >
        Back
      </MyButton>
      <MyButton
        onClick={onContinueClick}
        variant="contained"
        sx={{
          // width:width+"px"
          width: "10%",
        }}
      >
        Continue
      </MyButton>
    </div>
  );
}

export default SkipFooter;
