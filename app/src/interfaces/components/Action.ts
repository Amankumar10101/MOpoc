import { IFormElements } from "./FormBuilder/FormElements";

export interface IActionComponent{
    onContinueClick :(formData: IFormElements[])=>void;
    onBackClick :()=>void;
}