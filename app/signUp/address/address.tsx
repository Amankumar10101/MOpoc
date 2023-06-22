'use client'

import MoCard from "../../../components/MoCard/MoCard";
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../../components/MoTextfield/MoTextfields";
import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";


function Address() {

    const formData = {
        "className": "signup-about-form",
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
            },
            {
                "type": "button",
                "name": "Enter Address"

            }
        ]
    }

    return (
        <MoFormBuilder {...formData} />
    )


}

export default Address;