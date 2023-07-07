'use client'
// import "../page.css";
import MoFormBuilder from "../../src/components/complex/MoFormBuilder/MoFormBuilder";
import { projectDetailData } from "@/app/src/metaData/formData/projectDetails";
import { IActionComponent } from "../../src/interfaces/components/Action";
import Card from "@mui/material/Card";



function ProjectDetails() {




    return (<Card>
        <MoFormBuilder  {...projectDetailData} />
    </Card>
    )


}

export default ProjectDetails;