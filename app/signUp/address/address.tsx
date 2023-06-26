'use client'

import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import SkipFooter from "../../../components/SkipFooter/SkipFooter";
import {Continue} from '../../interface';

function Address({onContinueClick}:Continue) {

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
                "type": "textbox",
                "name": "about",
                "className": "login-email",
                "placeholder": "Write few things about yourself",
                "width": "300px",
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
        <MoFormBuilder onContinueClick={onContinueClick} {...formData} />
    )


}

export default Address;