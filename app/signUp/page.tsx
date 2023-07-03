'use client'

import "./page.css";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import { formData } from "../../data/signUp";
import { useRouter } from 'next/navigation';
import {  IFormElements } from "../interface";



function SignUp() {


    const router = useRouter();
    const role = "purchaser";




    const onContinueClick = (formData: IFormElements[]) => {

        const signUp: IFormElements[] = formData.reduce((acc: any, { name, value }: IFormElements) => {
            if (name !== "policy" && name !== "Create Account") {
                acc[name] = value;
              }
            return acc;
            
          
        }, { role } as unknown as IFormElements[]);
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