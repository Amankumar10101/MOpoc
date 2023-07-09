export const formData=(
) => {

    return({
    className: "create-account-form",
    formData: [
        {
            type: "textbox",
            id: "name",
            name: "name",
            placeholder: "Enter Name",
            className: "login-email",
            width:"300px",
            label:"Name*",
            value: ""
        },
        {
            type: "textbox",
            id: "email",
            name: "email",
            placeholder: "Enter Email",
            className: "login-email",
            width:"300px",
            label:"Email Id*",
            regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            showErrorMessage:  false,
            errorMessage: "invalid email",
            value: ""
        },
        {
            type: "password",
            name: "password",
            placeholder: "Create a Password",                       
            // className: "login-password",
            label: "Password*",
            width:"300px",
           
            // "regex":"/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/",
            
            value: ""
        },
        {
            type: "checkbox",
            name: "subscribe_upwork",
            className: "login-password",
            label: "Send me Updates of M.O.",
            value: ""
        },
        {
            type: "checkbox",
            // "name": "policy",
            className: "login-password",
            label: "I have read and agreed to the M.O. Terms of Services and Privacy Policy.",
            value: ""
        },
        {
            type: "button",
            name: "Create Account",
            color: "white",
            top: "3.125rem",
        }
    ]})
}