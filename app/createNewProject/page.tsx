'use client'
import "./page.scss";
import MoFormBuilder from "../../app/src/components/complex/MoFormBuilder/MoFormBuilder";
import MoMilestones from "@/app/src/components/shared/MoMilestones/MoMilestones";
import { projectDetailData } from "@/app/src/metaData/formData/projectDetails";
import { milestoneData } from "@/app/src/metaData/formData/milestones";
import { IActionComponent } from "@/app/src/interfaces/components/Action";
import Card from "@mui/material/Card";
import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";
import { useState, useEffect } from 'react';
import MoButton from "@/app/src/components/atomic/MoButton/MoButton";
import { Div } from '../src/components/atomic/MoMolecules/Molecules';
import { providerData } from "../src/metaData/formData/provider";

function ProjectDetails({ onBackClick }: IActionComponent) {

    const [openCard, setOpenCard] = useState(false);
    const [cardCount, setCardCount] = useState(0);

    const onContinueClick = (aboutData: IFormElements[]) => {
        // const formUpdate: IFormElements[] = aboutData.reduce(
        //     (acc: any, { name, value }: IFormElements) => {
        //       if (name) {
        //         acc[name] = value;
        //       }
        //       return acc;
        //     },
        //     { email } as unknown as IFormElements[]
        //   );
        //   console.log('formData is', formUpdate)

        //   patchData(Users.updateProfile, formUpdate)
        //   .then((response: any) => {
        //     console.log(response.data);

        //   })
        //   .catch((error: any) => {
        //     console.error(error);
        //   });




    }

    const handleButtonClick = () => {
        setOpenCard(!openCard);

        if (!openCard) {
        setCardCount(cardCount + 1);
        }
    };

    return (
        <div className="background">
            <div className="header">Project Details</div>
            <Card className="createNewProjectCard">
                {/* <Card className="project-details"></Card> */}
                <MoFormBuilder {...projectDetailData} />
                <Card className="provider-details">
                <div className="provider-header">Providers</div>
                    <MoFormBuilder {...providerData} />
                </Card>
                <Div className="button-container">
                    {openCard && (
                        <Card className="milestone">
                            <div className="milestones-header">Milestones</div>
                            <MoMilestones {...milestoneData} />
                            {/* Card {cardCount + 1} */}
                            <div className="milestone-button">
                                <MoButton variant="outlined" onClick={handleButtonClick} name="Discard Changes" />
                                <MoButton variant="contained" onClick={handleButtonClick} name="Save" />
                            </div>
                        </Card>
                    )}
                    <div className="add">
                    <MoButton variant="contained" onClick={handleButtonClick} name="Add Milestones"  />
                    </div>
                </Div>
            </Card>
            <div className="submit-button">
                <MoButton variant="contained" onClick={handleButtonClick} name="Submit" />
            </div>
        </div>
    )


}

export default ProjectDetails;