export interface TextfieldInterface{
    label?: string,
    placeholder: string,
    name: string,
    rows?: number,
    multiline?: boolean,
    className?:string,
    onChange:  ( name : string,value: string)=>void,
  }
export  interface FormElements {
    type: string,
    label: string,
    name: string,
    placeholder: string,
    rows?: number,
    className: string,
    value: string,
    width?: string
}
export interface FormBuilder{
    className?: string,
    formData: Array<Partial<FormElements>>
}
export interface DoughnutInterface{
    values: Array<number>;
    colors:Array<string>;
    labels:Array<string>;
  }

export interface CardInterface{
    name : string,
    status: string,
    development: string,
    tech: string,
    description: string,
    funds: string,
    date: string
}
export interface BasicCard{
    width: string
}
export interface ProgressBarInterface{
    funds: string,
    variant: string,
     value: number
}
export interface ButtonInterface{
    variant:"text" | "outlined" | "contained"| undefined ,
    name?: string,
    type: "button" | "submit" | "reset" | undefined,
    color?: string| undefined,
    width?: number| undefined,
}