export const providerData = {
    className:"create-new-project-provider-form",
    formData: [
        
        {
            type: "multiline",
            name: "provider",
            label: "Provider",
            placeholder: "Add provider for this project",
            className: "login-email",
            width: "100%",
            rows:4,
        },
        {
            type: "button",
            name:"Add Provider",
            width: "15%",
            className:"provider-button"
        }
    ]
}