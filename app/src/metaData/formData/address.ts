import SkipFooter from "../../components/atomic/SkipFooter/SkipFooter";

export const addressData = {
    "className": "signup-about-form",
    ActionComponent: SkipFooter,
    "formData": [
        {
            "type": "textbox",
            "name": "street address",
            "placeholder": "Your street name",
            "className": "login-email",
            "width": "300px",
            "label": "Street Address",
            "value": ""
        },
        {
            "type": "textbox",
            "name": "city",
            "className": "login-email",
            "placeholder": "Your city name",
            "width": "300px",
            "label": "City",
            "value": ""
        },
        {
            "type": "textbox",
            "name": "state",
            "placeholder": "Your state name",
            "className": "login-password",
            "label": "State/Province",
            "width": "300px",
            "value": ""
        },
        {
            "type": "textbox",
            "name": "postal code",
            "placeholder": "Your pincode",
            "className": "login-password",
            "label": "Zip/Postal Code",
            "width": "300px",
            "value": ""
        },
        {
            "type": "select",
            "name": "country",
            "placeholder": "Country name",
            "className": "login-password",
            "label": "Country",
            "width": "300px",
            "value": ""
        }
    ]
}