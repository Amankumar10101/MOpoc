'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Div } from '@/app/src/components/atomic/MoMolecules/Molecules';
import Card from '@mui/material/Card';
import MoButton from '@/app/src/components/shared/MoButton';
import MoTitleDetails from '@/app/src/components/shared/MoTitle&Details/MoTitle&Details';
import './page.scss';

export default function ProjectSent() {
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
        className='project-sent-dailoguebox'
      >
        <Div className='outerCheckCircle'><CheckCircleIcon sx={{
          color: "green",
          width: "100px",
          height: "100px",
          padding: 0,
          // backgroundColor:"white"
        }} /></Div>

        <DialogTitle className='project-sent-heading' id="alert-dialog-title">
          {"Project Sent"}
        </DialogTitle>
        <DialogContentText className='project-sent-content' id="alert-dialog-description">
          Your project has been sent to provider
        </DialogContentText>
        <Card className="projectSent-card" >
          <MoTitleDetails className="box1" title='Project' description='Heathify App UX/UI' />
          <MoTitleDetails className="box2" title='Project ID' description='6541365' />
          <MoTitleDetails className="box3" title='Provider' description='HCL Technologies' />
          <MoTitleDetails className="box4" title='Royalties' description='10%' />
          <MoTitleDetails className="box5" title='Duration' description='6 Months' />
        </Card>
        <DialogActions className='projectSent-buttons'>
          <MoButton onClick={handleClose} variant='contained' name='View Project Details'></MoButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}