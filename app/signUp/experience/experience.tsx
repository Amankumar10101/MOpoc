'use client'

import MoCard from "../../../components/MoCard/MoCard";
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../../components/MoTextfield/MoTextfields";
import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import SkipFooter from "../../../components/SkipFooter/SkipFooter";
import {ActionComponent} from '../../interface';


function Experience({onContinueClick,onBackClick}:ActionComponent) {

    const formData = {
        "className": "signup-about-form",
        ActionComponent: SkipFooter,
        "formData": [
            {
                "type": "textbox",
                "name": "position",
                "placeholder": "Select",
                "className": "login-email",
                "width": "300px",
                "label": "Position last held",
                "value": ""
            },
            {
                "type": "textbox",
                "name": "company",
                "className": "login-email",
                "placeholder": "Search Institute",
                "width": "300px",
                "label": "Company",
                "value": ""
            },
            {
                "type": "textbox",
                "name": "start date",
                "placeholder": "Search Institute",
                "className": "login-password",
                "label": "Start Date",
                "width": "300px",
                "value": ""
            },
            {
                "type": "textbox",
                "name": "end date",
                "placeholder": "Search Institute",
                "className": "login-password",
                "label": "End Date",
                "width": "300px",
                "value": ""
            }
        ]
    }

    return (
        <MoFormBuilder onBackClick={onBackClick} onContinueClick={onContinueClick} {...formData} />
    )


}

export default Experience;