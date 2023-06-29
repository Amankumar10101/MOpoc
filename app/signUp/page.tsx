'use client'

import "./page.css";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import { formData } from "../../data/signUp";
import { useRouter } from 'next/navigation';


function SignUp() {   

    const router = useRouter();

    const onContinueClick = () => {
        console.log("clickedwdjhgyih");
        router.push('/signUp/emailValidation');
        console.log("clickedwdjhgyih");
       
    }
    return (
        <div className="signup-page">
            <h3 className="signUp-heading">Create Account</h3>
            <MoFormBuilder onContinueClick={onContinueClick} {...formData()} />

        </div>
    )
}

export default SignUp;