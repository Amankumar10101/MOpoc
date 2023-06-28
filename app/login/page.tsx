'use client'


import MoCard from "../../components/MoCard/MoCard";
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../components/MoTextfield/MoTextfields";
import "./login.css";

import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import MoButton from "@/components/MoButton/MoButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from 'next/image';
import { loginData } from "../metaData/formData/login";

function Login() {


   
  
    return (
        <div className="login-main-page">
            {/* <section className="login-section1">
                <MoButton width="30%" variant="outlined" type="button" name="SignUp" onClick={handleChange} ></MoButton>
            </section> */}
            
            <section className="login-section2">
                <div className="login-mo-logo-container">
                    <Image src="/image/Mo-logo.png" className="login-mo-logo"
                        width={128} height={59} alt="MO Logo" />
                </div>
                <div className="login-fields">
                    <h1 className="login-heading">Hi there!</h1>
                    <h2 className="login-sub-heading">Welcome to M.O.</h2>
                <MoFormBuilder {...loginData} />
                  
                    <h4 className="login-signup">Don’t have an account? <MoButton name="Sign up" type="button" variant="text" 
                    // onClick={handleChange}
                     /></h4>
                    <MoFormBuilder {...loginData} />


                    <h5 className="login-signup">Don’t have an account? <span className="signUp-link">SignUp!</span></h5>
                </div>
                <div className="login-extensions">
                    <div className="login-icons" >
                        <LinkedInIcon />
                        <MailOutlineIcon />
                        <TwitterIcon />
                        <PublicIcon />
                    </div>
                    <h5 className="login-privacy">Privacy Policy</h5>
                </div>
            </section>

        </div>
    )


}

export default Login;