'use client'
import "./page.scss";
import MoFormBuilder from "../src/components/complex/MoFormBuilder/MoFormBuilder";
import { projectDetailData } from "@/app/src/metaData/formData/projectDetails";
import { IActionComponent } from "../src/interfaces/components/Action";
import * as React from 'react';
import Card from '@mui/material/Card';


function ProjectDetails({onContinueClick}:IActionComponent) {


  

    return (
        <Card className="createNewProjectCard">
        <MoFormBuilder onContinueClick={onContinueClick} {...projectDetailData} />
        </Card>
    )


}

export default ProjectDetails;