'use client'


import "../../../../styles/Pages/signUp/signup.scss";
import MoFormBuilder from "../../MoFormBuilder/MoFormBuilder";
import SkipFooter from "../../../atomic/SkipFooter/SkipFooter";
import {IActionComponent} from '../../../../interfaces/components/Action';


function Experience({onContinueClick,onBackClick}:IActionComponent) {

    const formData = {
        "className": "signup-about-form",
        ActionComponent: SkipFooter,
        "formData": [
            {
                "type": "select",
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