'use client'
import { useState,useEffect } from 'react';
import Provider from "./provider/provider";
import ProjectDetails from "./projectDetails/projectDetails";
import Tab from "../src/components/complex/Tab/Tab";




function NewProject() {
    const [isClicked, setIsClicked] = useState<number>(0);
    const [isBackClicked, setIsBackClicked] = useState<number>(0);

    const onContinueClick = () => {
        console.log("clicked");
      
        setIsClicked(1);

    }
    const onBackClick = () => {
        console.log("Backclicked");
      
        setIsBackClicked(1);

    }
    const tabs = [
        { label: 'Project Details', component: <ProjectDetails 
        onBackClick={onBackClick} onContinueClick={onContinueClick}
         /> },
        { label: 'Provider', component: <Provider
        onBackClick={onBackClick} onContinueClick={onContinueClick}
          /> },
        
    ];
      

    return (

        <div className="create-new-project-component"
        >
            <Tab tabs={tabs}></Tab>
            {/* <Tab isClicked={isClicked} setIsClicked={setIsClicked} isBackClicked={isBackClicked} setIsBackClicked={setIsBackClicked}  className="signUp-center-tab" width="550px" tabs={tabs} /> */}
            <Provider  onBackClick={onBackClick} onContinueClick={onContinueClick}></Provider>

        </div>

    )


}

export default NewProject;