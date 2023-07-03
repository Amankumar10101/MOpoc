import { Component, ReactElement } from "react";

export interface ActionComponent{
    onContinueClick :(formData: FormElements[])=>void;
    onBackClick :()=>void;
}
export interface TextfieldInterface{
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
export  interface FormElements {
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
export interface FormBuilder{
    onContinueClick ?:(formData: FormElements[])=>void;
    onBackClick?:()=>void;
    className?: string,
    ActionComponent?:(props:ButtonInterface)=>ReactElement,
    formData: Array<FormElements>
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
    variant?:"text" | "outlined" | "contained"| undefined ,
    name?: string,
    type?: "button" | "submit" | "reset" | undefined,
    color?: string| undefined,
    width?: string| undefined,
    onContinueClick?:  ()=>void,
    onClick?:()=>void,
    onBackClick?: ()=>void,

}