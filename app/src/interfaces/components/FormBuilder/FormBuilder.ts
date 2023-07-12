import { ReactElement } from "react";
import { IButtonInterface } from "../Button";
import { IFormElements } from "./FormElements";

export interface IFormBuilder{
    onContinueClick ?:(formData: IFormElements[])=>void;
    onBackClick?:()=>void;
    className?: string,
    ActionComponent?:(props:IButtonInterface)=>ReactElement,
    formData: Array<IFormElements>
}