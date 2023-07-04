'use client'

import "./page.css";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import { formData } from "../../data/signUp";
import { useRouter } from 'next/navigation';
import { postData } from "../src/services/api";
import { Users } from "../src/services/endpoint";
import { setItemInStorage } from "../src/utils/storageUtils";
import { IFormElements } from "../src/interfaces/components/FormBuilder/FormElements";
import { decodeToken } from "../src/utils/tokenDecode";




function SignUp() {

 
    const router = useRouter();
    const role = "PURCHASER";




    const onContinueClick = (formData: IFormElements[]) => {


        const formPost: IFormElements[] = formData.reduce((acc: any, { name, value }: IFormElements) => {
         if (name){
            acc[name] = value;
         }  
            return acc;
        }, { role } as unknown as IFormElements[]);
        // console.log()

        
           
                 postData(Users.signUp, formPost)
                 .then((response:any) => {
                    console.log(response.data)
                    setItemInStorage('token', JSON.stringify(response.data.access_token));
                    decodeToken()
                  })
                  .catch((error:any) => {
                    console.error(error);
                  });
                // const data = response.data;
                // return data;
            
           
        
        };
      
   
        // router.push('/signUp/emailValidation');


    
    return (
        <div className="signup-page">
            <h3 className="signUp-heading">Create Account</h3>
            <MoFormBuilder onContinueClick={onContinueClick} {...formData()} />

        </div>
    )
}

export default SignUp;

function then(arg0: (response: any) => void) {
    throw new Error("Function not implemented.");
}
