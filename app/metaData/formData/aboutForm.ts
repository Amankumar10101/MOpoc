import SkipFooter from "../../../components/SkipFooter/SkipFooter";

export const aboutData = {
    "className": "signup-about-form",
    ActionComponent: SkipFooter,
    "formData": [
        {
            "type": "textbox",
            "name": "name",
            "placeholder": "Enter Name",
            "className": "login-email",
            "width": "300px",
            "label": "Name",
            "value": ""
        },
        {
            "type": "multiline",
            "name": "about",
            "className": "login-email",
            "placeholder": "Write few things about yourself",
            "width": "300px",
            "rows": 4,
            "label": "About",
            "value": ""
        },
        {
            "type": "textbox",
            "name": "portfolio",
            "placeholder": "Enter Link",
            "className": "login-password",
            "label": "Portfolio/Website Link",
            "width": "300px",
            "value": ""
        },
        {
            "type": "textbox",
            "name": "phone",
            "placeholder": "Add phone number",
            "className": "login-password",
            "label": "Phone No.",
            "width": "300px",
            "value": ""
        }
    ]
}