'use client'
// import "../page.css";
import MoFormBuilder from "../src/components/complex/MoFormBuilder/MoFormBuilder";
import { projectDetailData } from "@/app/src/metaData/formData/projectDetails";
import { IActionComponent } from "../src/interfaces/components/Action";
import Provider from "./provider/provider";



function ProjectDetails({onContinueClick}:IActionComponent) {

    return (
        <Provider></Provider>
    )


}

export default ProjectDetails;