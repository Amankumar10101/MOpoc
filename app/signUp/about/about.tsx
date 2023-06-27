'use client'

import MoCard from "../../../components/MoCard/MoCard";
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../../components/MoTextfield/MoTextfields";
import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import SkipFooter from "../../../components/SkipFooter/SkipFooter";
import {ActionComponent} from '../../interface';

function About({onContinueClick,onBackClick}:ActionComponent) {

    const formData = {
        "className": "signup-about-form",
        ActionComponent: SkipFooter,
        "formData": [
            {
                "type": "textbox",
                "name": "name",
                "placeholder": "Enter Name",
                "className": "login-email",
                "width": "300px",
                "label": "Name",
                "value": ""
            },
            {
                "type": "multiline",
                "name": "about",
                "className": "login-email",
                "placeholder": "Write few things about yourself",
                "width": "300px",
                "rows": 4,
                "label": "About",
                "value": ""
            },
            {
                "type": "textbox",
                "name": "portfolio",
                "placeholder": "Enter Link",
                "className": "login-password",
                "label": "Portfolio/Website Link",
                "width": "300px",
                "value": ""
            },
            {
                "type": "textbox",
                "name": "phone",
                "placeholder": "Add phone number",
                "className": "login-password",
                "label": "Phone No.",
                "width": "300px",
                "value": ""
            }
        ]
    }

    return (
        <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...formData} />
    )


}

export default About;