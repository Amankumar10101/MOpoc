'use client'

import MoFormBuilder from "../src/components/complex/MoFormBuilder/MoFormBuilder";
import { projectDetailData } from "@/app/src/metaData/formData/projectDetails";
import { IActionComponent } from "../src/interfaces/components/Action";
import Provider from "./provider/provider";
import ProjectDetails from "./projectDetails/projectDetails";



function NewProject() {

    const onContinueClick = () => {
           
    }
    const tabs = [
        // { label: 'About', component: <Provider onContinueClick={onContinueClick} /> },
        // { label: 'Address', component: <Provider onContinueClick={onContinueClick} /> },
    ];
      

    return (
        <div className="create-new-project-component"
        >
            <Provider></Provider>
            <ProjectDetails></ProjectDetails>
            {/* <Tab isClicked={isClicked} setIsClicked={setIsClicked} isBackClicked={isBackClicked} setIsBackClicked={setIsBackClicked}  className="signUp-center-tab" width="550px" tabs={tabs} /> */}

        </div>
    )


}

export default NewProject;