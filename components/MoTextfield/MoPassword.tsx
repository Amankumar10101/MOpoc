// @ts-nocheck

import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {  useState, useEffect } from 'react';
import { TextfieldInterface } from '../../app/interface';
import WarningIcon from '@mui/icons-material/Warning';
import "./MoTextfields.scss";

const BootstrapInput = styled(InputBase)(({ theme }) => ({

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

export default function MoPassword(props: TextfieldInterface) {


    // console.log(props.rows);
    const { label, width, multiline, placeholder, name, showErrorMessage, errorMessage } = props;
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [confirmError, setConfirmError] = useState(false);

    const handleConfirmPassword = (value:string) => {
        // props.onChange("confirm password",event?.target?.value);
        if (password !== value) {
            setConfirmError(true);
            props.onChange(name,"");
           
        }else{
            setConfirmError(false);
            props.onChange(name,value);
        }

        setConfirmPassword(value);
    }
    const handlePassword = (value:string) => {
        if (confirmPassword === value) {
            props.onChange(name,value);
            setConfirmError(false);
        }
        else{
            setConfirmError(true);
            props.onChange(name,"");
        }
        // event.preventDefault();
        setPassword(value);

    }
    useEffect(()=>{},[confirmError]);
   

    return (<>
        <FormControl className='textfield' variant="standard">
            {label && <InputLabel shrink htmlFor="bootstrap-input">
                Password
            </InputLabel>}

            <BootstrapInput  type='password' className={props.className} value={password}  onChange={(event)=>handlePassword(event?.target.value)} name="password" placeholder={placeholder} id="bootstrap-input" />
            {showErrorMessage && <span className='form-error-msg'><WarningIcon fontSize='small' />Invalid Password</span>}
        </FormControl>
        <FormControl className='textfield' variant="standard">
            {label && <InputLabel shrink htmlFor="bootstrap-input">
                Confirm Paswword
            </InputLabel>}

            <BootstrapInput type='password' className={props.className} value={confirmPassword}  onChange={(event)=>handleConfirmPassword(event?.target.value)} name="confirm password" placeholder="Renter Password" id="bootstrap-input" />
            {confirmError && <span className='form-error-msg'><WarningIcon fontSize='small' />Password not Matched</span>}
        </FormControl>
    </>
    )
}
