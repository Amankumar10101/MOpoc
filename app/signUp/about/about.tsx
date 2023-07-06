import "../page.css";
import MoFormBuilder from "../../src/components/complex/MoFormBuilder/MoFormBuilder";
import { aboutData } from "@/app/src/metaData/formData/aboutForm";
import {IActionComponent} from '../../interface';


function About({onContinueClick,onBackClick}:IActionComponent) {


  

    return (
        <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...aboutData} />
    )


}

export default About;