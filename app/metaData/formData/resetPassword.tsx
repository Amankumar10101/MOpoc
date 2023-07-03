import BackFooter from "@/components/MoBackFooter/BackFooter";

export const formData=(
) => {

    return({
    className: "reset-account-form",
    ActionComponent: BackFooter,
    formData: [
        {
            "type": "textbox",
            "name": "email",
            "placeholder": "Enter email Id",
            "className": "login-email",
            "width":"300px",
            "label":"Email Id*",
            "regex":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "showErrorMessage":  false,
            "errorMessage": "invalid email",
            "value": ""
        },
        {
            "type": "button",
            "name": "Continue",
            "width": "100px"
        }
    ]})
}