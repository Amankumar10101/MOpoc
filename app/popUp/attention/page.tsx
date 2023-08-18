'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Div } from '@/app/src/components/atomic/MoMolecules/Molecules';
import Card from '@mui/material/Card';
import MoButton from '@/app/src/components/shared/MoButton';
import MoTitleDetails from '@/app/src/components/shared/MoTitle&Details/MoTitle&Details';
import './page.scss';

export default function Attention() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Send
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='attention-dailoguebox'
      >
        <ErrorOutlineRoundedIcon sx={{ 
            fontSize: "145px",
            color: "#FBC02D" 
        }} />

        <DialogTitle className='attention-heading' id="alert-dialog-title">
          {"Attention"}
        </DialogTitle>
          <DialogContentText className= 'attention-content' id="alert-dialog-description">
          Please <span className='attention-assign-provider'> Assign Provider </span> for this project
          </DialogContentText>
          <Card className="attention-card">
            <MoTitleDetails className="box1" title='Project ID' description='Heathify App UX/UI' />
            <MoTitleDetails className="box2" title='Royalties' description='10%' />
            <MoTitleDetails className="box3" title='Duration' description='6 Months' />
          </Card>
        <DialogActions className='attention-buttons'>
          <MoButton onClick={handleClose} variant='outlined' name='Save Project'></MoButton>
          <MoButton onClick={handleClose} variant='contained' name='Assign Provider'></MoButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}