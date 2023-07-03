export interface ITextfieldInterface{
    width?:string,
    label?: string,
    placeholder?: string,
    name?: string,
    rows?: number,
    inputType?:string,
    multiline?: boolean,
    showErrorMessage?:boolean,
    errorMessage?: string,
    className?:string,
    onChange?:  ( name : string,value: string)=>void,
  }