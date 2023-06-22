'use client'

import MoCard from "../../../components/MoCard/MoCard";
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../../components/MoTextfield/MoTextfields";
import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import MoDoughnut from "../../../components/MoDoghnut/MoDoughnut";
import MoButton from "@/components/MoButton/MoButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from 'next/image';
import Box from '@mui/material/Box';

function About() {

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
            },
            {
                "type": "button",
                "name": "Create Account"

            }
        ]
    }

    return (
        <MoFormBuilder {...formData} />
    )


}

export default About;