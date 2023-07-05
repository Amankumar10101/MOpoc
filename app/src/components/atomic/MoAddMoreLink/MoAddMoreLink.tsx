//@ts-nocheck
'use client'

import ButtonPrimary from '@/app/src/components/atomic/Button/ButtonPrimary';
import { Button, FormControl, InputLabel } from '@mui/material';
import { ITextfieldInterface } from '../../../../interface';
import MoTextfields, { BootstrapInput } from "../MoTextfield/MoTextfields";
import React, { useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';



const Portfolio: React.FC<ITextfieldInterface> = (props) => {

    const [textFields, setTextFields] = useState<string[]>(['']);
    const [showErrorMessage, setShowErrorMsg]=useState();
    const { label, width, multiline, inputType, placeholder, name } = props;
    let isButtonDisabled = textFields.some((value) => value === '');

    const handleAddTextField = () => {
        if(textFields.length<5){
        setTextFields([...textFields, ''])
        props.onChange(name, [...textFields, '']);}
        else isButtonDisabled=true;
    }

    const handleTextFieldChange = (index: number, value: string) => {
        const updateTextFields = [...textFields];
        updateTextFields[index] = value;
        setTextFields(updateTextFields);


    }
   

    return (
        <FormControl className='textfield' variant="standard">
            {label && <span htmlFor="bootstrap-input">
                {label}
            </span>}
            {textFields.map((value, index) => (
                <BootstrapInput sx={{marginBottom:"8px"}} type={inputType ? inputType : 'text'} className={props.className} name={name} placeholder={placeholder} id="bootstrap-input" key={index}  onChange={(e) => handleTextFieldChange(index, e.target.value)} />
            ))}
            <Button sx={{width:"40%" , marginLeft:"60%"}} disabled={isButtonDisabled} onClick={handleAddTextField}>Add More Link</Button>
        </FormControl>
    )
}

export default Portfolio;