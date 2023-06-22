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

function Login() {

    const formData = {
        "className": "login-form",
        "formData": [
            {
                "type": "textbox",
                "name": "email",
                "placeholder": "Your Email",
                "className": "login-email",
                "width":"300px"
            },
            {
                "type": "textbox",
                "name": "password",
                "placeholder": "Password",
                "className": "login-password",
                "width":"300px"
            }
            // {
            //     "type": "button",
            //     "name": "Login"

            // }
        ]
    }
const handleChange=()=>
{

}
    return (
        <div className="login-main-page">
            <section className="login-section1">
                <MoButton variant="outlined" type="button" name="SignUp" onClick={handleChange} ></MoButton>
            </section>
            <section className="login-section2">
                <div className="login-mo-logo">
                    <Image src="/image/Mo-logo.png" width={80} height={30} alt="MO Logo" />
                </div>
                <div className="login-fields">
                    <h1 className="login-heading">Hi there!</h1>
                    <h2 className="login-sub-heading">Welcome to M.O.</h2>
                    <MoFormBuilder {...formData} />
                    <MoButton name="Forgot Password?" type="button" variant="text" onClick={handleChange}></MoButton>
                    <MoButton name="Login" width={326} type="button" variant="contained" onClick={handleChange} />
                    <h4 className="login-signup">Don’t have an account? <MoButton name="Sign up" type="button" variant="text" onClick={handleChange} /></h4>
                </div>
                <div className="login-extensions">
                        <div className="login-icons" >
                            <LinkedInIcon />
                            <MailOutlineIcon />
                            <TwitterIcon />
                            <PublicIcon />
                        </div>
                    <h4 className="login-privacy">Privacy Policy</h4>
                </div>
            </section>

        </div>
    )


}

export default Login;