export  interface IFormElements {
    type: string,
    label?: string,
    name?: string,
    top?: string,
    placeholder?: string,
    rows?: number,
    className?: string,
    value?: string | boolean,
    width?: string,
    regex?:RegExp,
    id?: string,
    color?: string,
    showErrorMessage?:boolean,
    errorMessage?: string,
    link?: string
}