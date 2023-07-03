import { Component, ReactElement } from "react";


export interface IActionComponent{
    onContinueClick :(formData: IFormElements[])=>void;
    onBackClick :()=>void;
}
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
export interface IFormBuilder{
    onContinueClick ?:(formData: IFormElements[])=>void;
    onBackClick?:()=>void;
    className?: string,
    ActionComponent?:(props:IButtonInterface)=>ReactElement,
    formData: Array<IFormElements>
}
export interface IDoughnutInterface{
    values: Array<number>;
    colors:Array<string>;
    labels:Array<string>;
  }

export interface ICardInterface{
    name : string,
    status: string,
    development: string,
    tech: string,
    description: string,
    funds: string,
    date: string
}
export interface IBasicCard{
    width: string
}
export interface IProgressBarInterface{
    funds: string,
    variant: string,
     value: number
}
export interface IButtonInterface{
    variant?:"text" | "outlined" | "contained"| undefined ,
    name?: string,
    type?: "button" | "submit" | "reset" | undefined,
    color?: string| undefined,
    width?: string| undefined,
    onContinueClick?:  ()=>void,
    onClick?:()=>void,
    onBackClick?: ()=>void,

}