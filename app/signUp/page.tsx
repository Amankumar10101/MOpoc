'use client'
import "./page.css";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import { formData } from "../../data/signUp";



function SignUp() {   
const change=()=>{
console.log("change");
}
    return (
        <div className="signup-page">
            <h2 className="login-heading">Create Account</h2>      
                    <MoFormBuilder {...formData(change)} />                  
        </div>
    )
}

export default SignUp;