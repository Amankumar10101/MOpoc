//@ts-nocheck

import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { HTMLAttributes, useState, useEffect, ChangeEvent } from 'react';
import { ButtonClasses } from '@mui/material';
import  {ITextfieldInterface}  from '../../../interfaces/components/TextFieldInterface';
import WarningIcon from '@mui/icons-material/Warning';
import "../../../styles/components/shared/MoTextfields.scss";
import { MoLabel } from '../MoMolecules/Molecules';

const BootstrapInput = styled(InputBase)(({ theme }) => ({

    '& .MuiInputBase-input': {
        borderRadius: 6,
        position: 'relative',
        backgroundColor: 'white',
        border: '2px solid',
        borderColor: theme.palette.mode === 'light' ? '#dedddd' : '#2D3843',
        fontSize: 16,
        // width: width,
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

export default function MoPassword(props: ITextfieldInterface) {


    // console.log(props.rows);
    const { label, width, multiline, placeholder, name, showErrorMessage, errorMessage } = props;
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmError, setConfirmError] = useState(false);

    const handleConfirmPassword = (value:string) => {
        // props.onChange("confirm password",event?.target?.value);
        if (password !== value) {
            setConfirmError(true);
            props.onChange?.(name,"");
           
        }else{
            setConfirmError(false);
            props.onChange?.(name,value);
        }

        setConfirmPassword(value);
    }
    const handlePassword = (value:string) => {
        if (confirmPassword === value) {
            props.onChange?.(name,value);
            setConfirmError(false);
        }
        else{
            setConfirmError(true);
            props.onChange?.(name,"");
        }
        // event.preventDefault();
        setPassword(value);

    }
    useEffect(()=>{},[confirmError]);
   

    return (<>
        <FormControl className='textfield' variant="standard">
            {label && <MoLabel>{label}</MoLabel>}
            <BootstrapInput  type='password' className={props.className} value={password}  onChange={(event)=>handlePassword(event?.target.value)} name="password" placeholder={placeholder} id="bootstrap-input-password" />
            {showErrorMessage && <span className='form-error-msg'><WarningIcon fontSize='small' />Invalid Password</span>}
        </FormControl>
        <FormControl className='textfield' variant="standard">
            {label && <MoLabel>
                Confirm Password*
            </MoLabel>}

            <BootstrapInput type='password' className={props.className} value={confirmPassword}  onChange={(event)=>handleConfirmPassword(event?.target.value)} name="confirm password" placeholder="Confirm Password" id="bootstrap-input-confirm-password" />
            {confirmError && <span className='form-error-msg'><WarningIcon fontSize='small' />Password not Matched</span>}
        </FormControl>
    </>
    )
}
