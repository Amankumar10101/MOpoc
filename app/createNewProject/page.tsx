'use client'
import "./page.scss";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import { projectDetailData } from "@/app/src/metaData/formData/projectDetails";
import {IActionComponent} from '../interface';


function ProjectDetails({onContinueClick}:IActionComponent) {


  

    return (
        <MoFormBuilder onContinueClick={onContinueClick} {...projectDetailData} />
    )


}

export default ProjectDetails;