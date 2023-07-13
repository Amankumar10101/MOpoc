export const loginData = {
    "className": "login-form",
    "formData": [
        {
            type: "textbox",
            name: "email",
            // inputType: "text",
            placeholder: "Your Email",
            className: "login-email",
            showErrorMessage:  false,
            errorMessage: "Enter Name",
            regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            required:true,
            width: "300px"
        },
        {
            type: "textbox",
            inputType: "password",
            name: "password",
            placeholder: "Password",
            className: "login-password",
            width: "300px",
            required:true
        },
        {
            type: "link",
            name: "Forgot Password?",
            link:"#"

        },
        {
            type: "button",
            name: "Login",
            color: "white",

        }
    ]
}


