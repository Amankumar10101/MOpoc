'use client'

import MoCard from "../../components/MoCard/MoCard";
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../components/MoTextfield/MoTextfields";
import "./page.css";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import MoDoughnut from "../../components/MoDoghnut/MoDoughnut";
import MoButton from "@/components/MoButton/MoButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { formData } from "../../data/signUp";


function SignUp() {

    
const change=()=>{
console.log("change");
}
    return (
        <div className="signup-page">
            <h2 className="login-heading">Create Account</h2>      
                    <MoFormBuilder {...formData()} />                  
        </div>
    )
}

export default SignUp;