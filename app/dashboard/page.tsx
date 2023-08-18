'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./page.scss";
import MoButton from '../src/components/shared/MoButton';
import { Typography3 } from '../src/components/atomic/MoMolecules/Molecules';

export default function BasicCard() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
    <Card className='escrow-creation'>
      <CardContent className='escrow-content'>
        <Typography className='escrow-title' >
        “No ESCROW Created”
        </Typography>
        <Typography3 className='escrow-desc' >You do not have any active ESCROW transaction  at the moment.</Typography3>
        <Typography3 className='escrow-desc' >Create an ESCROW to securely manage the funds for your project.</Typography3>
      </CardContent>
    </Card> 
    <MoButton className="create-escrow-button" onClick={handleClose} variant='contained' name='Create Escrow'></MoButton>
    </div>
    );
}
