'use client'

import "./page.css";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import { formData } from "../../data/signUp";
import { useRouter } from 'next/navigation';
import {  FormElements } from "../interface";



function SignUp() {


    const router = useRouter();
    const role = "purchaser";




    const onContinueClick = (formData: FormElements[]) => {

        const signUp: FormElements[] = formData.reduce((acc: any, { name, value }: FormElements) => {
            if (name !== "policy" && name !== "Create Account") {
                acc[name] = value;
              }
            return acc;
            
          
        }, { role } as unknown as FormElements[]);
        console.log('signup data', signUp)
        console.log('formdata is', formData);

        // router.push('/signUp/emailValidation');


    }
    return (
        <div className="signup-page">
            <h3 className="signUp-heading">Create Account</h3>
            <MoFormBuilder onContinueClick={onContinueClick} {...formData()} />

        </div>
    )
}

export default SignUp;