"use client";

import "../src/styles/Pages/login/login.scss";
import { useRouter } from "next/navigation";
import MoFormBuilder from "../src/components/complex/MoFormBuilder/MoFormBuilder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import { loginData } from "../src/metaData/formData/login";
import { postData } from "../src/services/api";
import { Users } from "../src/services/endpoint";
import {
  getItemFromStorage,
  setItemInStorage,
} from "../src/utils/storageUtils";
import { IFormElements } from "../src/interfaces/components/FormBuilder/FormElements";
import { decodeToken } from "../src/utils/tokenDecode";
import { useState } from "react";
import CustomizedSnackbars from "../src/components/shared/MoToaster/Alert";


function Login() {
  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const onBackClick=()=>{

  }

  const onContinueClick = (formData: IFormElements[]) => {
    const loginForm: IFormElements[] = formData.reduce(
      (acc: any, { name, value }: IFormElements) => {
        if (name) {
          acc[name] = value;
        }
        return acc;
      },
      {} as unknown as IFormElements[]
    );

    console.log("loginData", loginForm);

    postData(Users.signIn, loginForm)
      .then((response: any) => {
        setItemInStorage("token", JSON.stringify(response.data.access_token));
       
        setOpenSnackbar(true); // Open the snackbar
          setSnackbarSeverity("success");
        console.log(getItemFromStorage("token"));
     
          if (response.data.IsUpdate === false){
            router.push('/signUp/optionalSignUp');
         }
          
    
      

        // router.push('/signUp/optionalSignUp');

        decodeToken();
        console.log("decoded", decodeToken());
      })
      .catch((error: any) => {
        console.error(error);
       
          setOpenSnackbar(true); // Open the snackbar
          setSnackbarSeverity("error");
      
      });

    // router.push('/dashboard');
  };

  return (
    <>
      <div className="login-main-page">
        <section className="login-section2">
          <div className="login-mo-logo-container">
            <Image
              src="/image/Mo-logo.png"
              className="login-mo-logo"
              width={128}
              height={59}
              alt="MO Logo"
            />
          </div>
          <div className="login-fields">
            <h1 className="login-heading">Hi there!</h1>
            <h2 className="login-sub-heading">Welcome to M.O.</h2>

            <MoFormBuilder onContinueClick={onContinueClick} {...loginData} />

            <h5 className="login-signup">
              Don’t have an account?{" "}
              <span
                onClick={() => router.push("/signUp",{query:"jhgu"})}
                className="signUp-link"
              >
                SignUp!
              </span>
            </h5>
          </div>
          <div className="login-extensions">
            <div className="login-icons">
              <LinkedInIcon />
              <MailOutlineIcon />
              <TwitterIcon />
              <PublicIcon />
            </div>
            <h5 className="login-privacy">Privacy Policy</h5>
          </div>
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
        </section>
      </div>
    </>
  );
}

export default Login;
