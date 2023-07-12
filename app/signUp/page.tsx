"use client";

import "./page.css";
import MoFormBuilder from "../src/components/complex/MoFormBuilder/MoFormBuilder";
import { formData } from "../src/metaData/formData/signUp";
import { NextRouter, useRouter } from "next/router";
import { postData } from "../src/services/api";
import { Users } from "../src/services/endpoint";
import { setItemInStorage } from "../src/utils/storageUtils";
import { IFormElements } from "../src/interfaces/components/FormBuilder/FormElements";
import { decodeToken } from "../src/utils/tokenDecode";
import { useSearchParams } from "next/navigation";

function SignUp() {
  const role = useSearchParams().get("title");
  console.log(role)

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
        // router.push('/signUp/emailValidation');
        setItemInStorage("token", JSON.stringify(response.data.access_token));
        decodeToken();
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <div className="signup-page">
      <h3 className="signUp-heading">Create Account</h3>
      <MoFormBuilder onContinueClick={onContinueClick} {...formData()} />
    </div>
  );
}

export default SignUp;

function then(arg0: (response: any) => void) {
  throw new Error("Function not implemented.");
}
