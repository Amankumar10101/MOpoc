import Button from "@mui/material/Button";
import {IButtonInterface} from '../../../interfaces/components/Button';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/src/styles/theme";



const MyButton = styled(Button)((props:any) => ({
    backgroundColor: props.variant==="contained"?props.color? props.color: "#00B7FD":"transparent",
    borderColor: props.variant=== "outlined"?props.color? props.color:"#00B7FD": "none",
    textColor: props.variant==="text"? props.color? props.color:"#00B7FD": "white",
    textTransform: "none",
    paddingTop:"10px",
    paddingBottom:"10px",
    marginTop:"10px",
    // top: props.top,

   
    // width: props.size? props.size: 50  ,
  }));

function MoButton(props: IButtonInterface){
   
    const {variant,type,width,color, name, top, onClick}=props;
    

return (
    <ThemeProvider theme={theme}>
    <MyButton 
    onClick={onClick}
     sx={{
        // width:width+"px"
        width: {width},
        color: {color},
        
        
    }} variant={variant}
    // top={top as any}
      type={type}>{name}</MyButton>
    </ThemeProvider>
)
}

export default MoButton;