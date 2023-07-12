"use client";

import "../../../styles/Pages/signUp/signup.scss";
import MoFormBuilder from "../MoFormBuilder/MoFormBuilder";
import {formData}  from "../../../metaData/formData/signUp";
import { useRouter } from 'next/navigation';
import { postData } from "../../../services/api";
import { Users } from "../../../services/endpoint";
import { IFormElements } from "../../../interfaces/components/FormBuilder/FormElements";
import { useState } from "react";
import CustomizedSnackbars from "../../shared/MoToaster/Alert";

interface ISignUp {
    role: string;
}

function SignUp({role}:ISignUp) {
  const [isBackClicked, setIsBackClicked] = useState<number>(0);
  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");


 

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
        setOpenSnackbar(true); // Open the snackbar
          setSnackbarSeverity("success");
        router.push('/signUp/optionalSignUp');
        // setItemInStorage("token", JSON.stringify(response.data.access_token));
        // decodeToken();
      })
      .catch((error: any) => {
        console.error(error);
        setOpenSnackbar(true); // Open the snackbar
          setSnackbarSeverity("error");
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
      {openSnackbar && (
            <CustomizedSnackbars
              open={openSnackbar}
              severity={snackbarSeverity}
              message={
                snackbarSeverity === "success"
                  ? "Login successful!"
                  : snackbarSeverity === "error"
                  ? "Email & Password is wrong"
                  : snackbarSeverity === "warning"
                  ? "Warning occurred"
                  : "Operation failed!"
              }
              onClose={() => setOpenSnackbar(false)}
            />
          )}
    </div>
  );
}

export default SignUp;

function then(arg0: (response: any) => void) {
  throw new Error("Function not implemented.");
}
