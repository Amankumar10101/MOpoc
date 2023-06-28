'use client'

import ButtonPrimary from '@/components/Button/ButtonPrimary';
import { Button } from '@mui/material';
import React, { useState } from 'react'

interface PortfolioProps{}

const Portfolio: React.FC<PortfolioProps> = () => {

    const [textFields, setTextFields] = useState<string[]>(['']);


    const handleAddTextField = () => {
        setTextFields([...textFields,''])
    }

    const handleTextFieldChange = (index: number,value:string)=> {
        const updateTextFields = [...textFields];
        updateTextFields[index] = value;
        setTextFields(updateTextFields);
    }
    const isButtonDisabled = textFields.some((value) => value === '');
    
    return (
        <>
        <div>
            {textFields.map((value,index)=> (
                 <>
                 <div style={{
                    color: '#585858',
                    fontSize: '0.875rem',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: ' 1.25rem'
                }}>
                    Portfolio/Website Link
                </div>
                <input key={index} placeholder='Enter Link'  value={value} onChange={(e) => handleTextFieldChange(index, e.target.value)}/>
            </> 
              ))}
               <div><Button disabled={isButtonDisabled} onClick={handleAddTextField}>Add More Link</Button></div>
             </div>
             </>
            )}

export default Portfolio;