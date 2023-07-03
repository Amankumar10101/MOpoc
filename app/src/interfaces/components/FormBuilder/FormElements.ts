export  interface IFormElements {
    type: string,
    label?: string,
    name?: string,
    placeholder?: string,
    rows?: number,
    className?: string,
    value?: string | boolean,
    width?: string,
    regex?:RegExp,
    showErrorMessage?:boolean,
    errorMessage?: string,
    link?: string
}