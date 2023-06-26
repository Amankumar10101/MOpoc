
//@ts-nocheck
import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { HTMLAttributes, useState ,useEffect} from 'react';
import { ButtonClasses } from '@mui/material';
import TextfieldInterface from '../../app/interface';
import WarningIcon from '@mui/icons-material/Warning';
import "./MoTextfields.css"


export default function MoTextfields(props : Partial<TextfieldInterface> ){


  // console.log(props.rows);
const {label,width, multiline, placeholder, name, showErrorMessage, errorMessage }=props;

// useEffect(() => {
//   console.log('useeffect', showErrorMessage);
// }, [showErrorMessage]); // Only re-run the effect if count change





  const BootstrapInput = styled(InputBase)(({ theme,props }) => ({
    
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 6,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
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
  console.log("showErrorMessage", showErrorMessage);
  return(
    <FormControl className='textfield' variant="standard">
      {label && <InputLabel shrink htmlFor="bootstrap-input">
          {label}
        </InputLabel>}
        
        {multiline? <BootstrapInput  className={props.className}  name={name} multiline rows={props.rows} placeholder={placeholder} id="bootstrap-input" onChange={(event)=>props.onChange(name,event?.target?.value)} />:
        <BootstrapInput  className={props.className}  onChange={(event)=>props.onChange(name,event?.target?.value)} name={name} placeholder={placeholder} id="bootstrap-input"  />
        }
        {showErrorMessage && <span className='form-error-msg'><WarningIcon fontSize='small'/>{errorMessage}</span>}
      </FormControl>
      
  )
}
// function MoTextfields(){

//     const BootstrapInput = styled(InputBase)(({ theme }) => ({
//         'label + &': {
//           marginTop: theme.spacing(3),
//         },
//         '& .MuiInputBase-input': {
//           borderRadius: 4,
//           position: 'relative',
//           backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
//           border: '1px solid',
//           borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
//           fontSize: 16,
//           width: 'auto',
//           padding: '10px 12px',
//           transition: theme.transitions.create([
//             'border-color',
//             'background-color',
//             'box-shadow',
//           ]),
//           // Use the system font instead of the default Roboto font.
//           fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',
//           ].join(','),
//           '&:focus': {
//             boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//             borderColor: theme.palette.primary.main,
//           },
//         },
//       }));

// return(
    
//     <FormControl variant="standard">
//         <InputLabel shrink htmlFor="bootstrap-input">
//           Label
//         </InputLabel>
//         <BootstrapInput placeholder="input" id="bootstrap-input" />
//       </FormControl>
      
// )
// }
// export default MoTextfields;