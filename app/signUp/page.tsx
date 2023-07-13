"use client";

import "../src/styles/Pages/signUp/signup.scss";
import MoFormBuilder from "../src/components/complex/MoFormBuilder/MoFormBuilder";
import {formData}  from "../src/metaData/formData/signUp";
import { useRouter } from 'next/navigation';
import { postData } from "../src/services/api";
import { Users } from "../src/services/endpoint";
import { setItemInStorage } from "../src/utils/storageUtils";
import { IFormElements } from "../src/interfaces/components/FormBuilder/FormElements";
import { decodeToken } from "../src/utils/tokenDecode";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function SignUp() {
  const [isBackClicked, setIsBackClicked] = useState<number>(0);
  const router = useRouter();
  const role = useSearchParams().get("title");
 

  const onContinueClick = (formData: IFormElements[]) => {
    const formPost: IFormElements[] = formData.reduce(
      (acc: any, { name, value }: IFormElements) => {
        if (name) {
          acc[name] = value;
        }
        return acc;
      },
      { role } as unknown as IFormElements[]
    );

    postData(Users.signUp, formPost)
      .then((response: any) => {
        console.log(response.data);
        router.push('/signUp/optionalSignUp');
        // setItemInStorage("token", JSON.stringify(response.data.access_token));
        // decodeToken();
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const onBackClick = () => {
    console.log("Backclicked");
  
    setIsBackClicked(1);

}

  return (
    <div className="signup-page">
      <div>
      <h3 className="signUp-heading">Create your account</h3>
      </div>
      <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...formData()} />
    </div>
  );
}

export default SignUp;

function then(arg0: (response: any) => void) {
  throw new Error("Function not implemented.");
}
