
//@ts-nocheck
import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import WarningIcon from '@mui/icons-material/Warning';
import "./MoTextfields.scss";



export const BootstrapInput = styled(InputBase)(({ theme,props }) => ({
    
  'label + &': {
    marginTop: theme.spacing(3),
  },
  // css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline
  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#fff',
    border: '2px solid',
    borderColor: theme.palette.mode === 'light' ? '#dedddd' : '#2D3843',
    fontSize: 16,
    // width: width,
    width:"100%",
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
export default function MoTextfields(props : ITextfieldInterface ){




  const { label, width, multiline, inputType, placeholder, name, showErrorMessage, errorMessage } = props;


 
  return(

    <FormControl className={props.className} variant="standard">
      {label && <span htmlFor="bootstrap-input">
        {label}
      </span>}

      {multiline ? <BootstrapInput type={inputType ? inputType : 'text'} 
      // className={props.className} 
      name={name} multiline rows={props.rows} placeholder={placeholder} id="bootstrap-input" onChange={(event) => props.onChange(name, event?.target?.value)} /> :
        <BootstrapInput type={inputType ? inputType : 'text'} 
        // className={props.className} 
        onChange={(event) => props.onChange(name, event?.target?.value)} name={name} placeholder={placeholder} id="bootstrap-input" />
      }
      {showErrorMessage && <span className='form-error-msg'><WarningIcon fontSize='small' />{errorMessage}</span>}
    </FormControl>

  )
}
