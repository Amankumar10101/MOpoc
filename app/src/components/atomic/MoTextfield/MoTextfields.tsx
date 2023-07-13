//@ts-nocheck
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { ITextfieldInterface } from '../../../interfaces/components/TextFieldInterface';
import WarningIcon from '@mui/icons-material/Warning';
import "../../../styles/components/shared/MoTextfields.scss";
import { MoLabel } from '../MoMolecules/Molecules';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({

  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    backgroundColor:"white",
    // backgroundColor: theme.palette.mode === 'dark' ? '#FFF' : '#1A2027',
    border: '2px solid',
    borderColor: theme.palette.mode === 'light' ? '#dedddd' : '#2D3843',
    fontSize: 16,
    width: "100%",
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
export default function MoTextfields(props: ITextfieldInterface) {
  const { label, width, multiline, inputType, placeholder, name, showErrorMessage, errorMessage, id } = props;
 


  return (
    <FormControl sx={{width:"100%"}} className={props.className} variant="standard">
      {label && <MoLabel>
        {label}
      </MoLabel>}


      {multiline ? <BootstrapInput type={inputType ? inputType : 'text'} className={props.className} name={name} multiline rows={props.rows} placeholder={placeholder} id={id} onChange={(event) => props.onChange?.(name, event?.target?.value)} /> :
        <BootstrapInput type={inputType ? inputType : 'text'} className={props.className} onChange={(event) => props.onChange?.(name, event?.target?.value)} name={name} placeholder={placeholder} id={id} />

      }
      {showErrorMessage && <span className='form-error-msg'><WarningIcon fontSize='small' />{errorMessage}</span>}
    </FormControl>

  )
}
