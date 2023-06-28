'use client'

import "./page.css";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import { formData } from "../../data/signUp";



function SignUp() {   


   

    return (
        <div className="signup-page">
            <h2 className="login-heading">Create Account</h2>
            <MoFormBuilder  {...formData()} />
        </div>
    )
}

export default SignUp;