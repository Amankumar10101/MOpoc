'use client'
import "./page.scss";
import { IActionComponent } from "@/app/src/interfaces/components/Action";
import Card from "@mui/material/Card";
import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";
import { useState, useEffect } from 'react';
import MoButton from "@/app/src/components/atomic/MoButton/MoButton";
import { Div } from '../src/components/atomic/MoMolecules/Molecules';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


// function createData(
//     notification: string,
//     time: string,
// ) {
//     return { notification, time };
// }

// const rows = [
//     createData('Project Title', 'Fitness App'),
//     createData('Project Code', 'PR#0003727'),
// ];

function ShowProjects() {

    return (
        <div>
            <div className="header">Projects</div>
            <Card className="createNewProjectCard">
                <Card className="provider-details">
                <ListItem>
                    <div className="circle"></div>
                        <ListItemText primary="Fitness App" secondary="PR#0003727" />
                    </ListItem>
                </Card>
                <Card className="provider-details">
                <ListItem>
                    <div className="circle"></div>
                        <ListItemText primary="Fitness App" secondary="PR#0003727" />
                    </ListItem>
                </Card>
                <Card className="provider-details">
                    <ListItem>
                    <div className="circle"></div>
                        <ListItemText primary="Fitness App" secondary="PR#0003727" />
                    </ListItem>
                </Card>
            </Card>
        </div>
    )


}

export default ShowProjects;




