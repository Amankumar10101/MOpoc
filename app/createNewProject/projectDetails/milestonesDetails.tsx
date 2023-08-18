'use client'
import "./page.scss";
import MoFormBuilder from "../../src/components/complex/MoFormBuilder/MoFormBuilder";
import MoMilestones from "@/app/src/components/shared/MoMilestones/MoMilestones";
import { projectDetailData } from "@/app/src/metaData/formData/projectDetails";
import { milestoneData } from "@/app/src/metaData/formData/milestones";
import { IActionComponent } from "../../src/interfaces/components/Action";
import Card from "@mui/material/Card";
import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";
import { useState, useEffect } from 'react';
import MoButton from "@/app/src/components/atomic/MoButton/MoButton";
import Button from "../../src/components/atomic/Button/ButtonPrimary";
import { Div } from '../../src/components/atomic/MoMolecules/Molecules';

function MilestonesDetails() {

    const [openCard, setOpenCard] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = () => {
        setClickCount(clickCount + 1);

        if (clickCount >= 1) {
            setOpenCard(!openCard);
            setClickCount(0);
        }
    };



    return (
        <div>
            <Card className="createNewProjectCard">
                dsvvssfb
                {openCard && (
                    <Card className="milestone">
                        <MoMilestones {...milestoneData} />
                        <div className="milestone-button">
                            <MoButton variant="outlined" onClick={handleButtonClick} name="Discard Changes" />
                            <MoButton variant="contained" onClick={handleButtonClick} name="Save" />
                        </div>
                    </Card>
                )}
            </Card>
            <MoButton variant="contained" onClick={handleButtonClick} name="Add Milestones" />
        </div>
    )

}


export default MilestonesDetails;