
import BackFooter from "@/app/src/components/shared/MoBackFooter/BackFooter";

export const formData=(
) => {

    return({
    className: "create-reset-form",
    ActionComponent: BackFooter,
    formData: [
        {
            "type": "password",
            "name": "password",
            "placeholder": "Create a Password",
            "className": "login-password",
            "label": "Password",
            "width":"200px",
            "regex":/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "errorMessage":"invalid password",
            "value": ""
        },
        {
            "type": "button",
            "name": "Confirm",
        }
    ]})
}