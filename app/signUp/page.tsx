
'use client'

import MoCard from "../../components/MoCard/MoCard";
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import { useNavigate } from "react-router-dom";
import "./page.css";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";

import { formData } from "../../data/signUp";


function SignUp() {

    const navigate = useNavigate();

    const onContinueClick = () => {
        navigate("app/signUp/emailValidation");
    }
    return (
        <div className="signup-page">
            <h2 className="login-heading">Create Account</h2>
            <MoFormBuilder onContinueClick={onContinueClick} {...formData()} />
        </div>
    )
}

export default SignUp;