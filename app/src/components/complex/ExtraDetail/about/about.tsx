import "../page.css";
import MoFormBuilder from "../../MoFormBuilder/MoFormBuilder";
import { aboutData } from "@/app/src/metaData/formData/aboutForm";
import {IActionComponent} from '../../../../interfaces/components/Action';


function About({onContinueClick,onBackClick}:IActionComponent) {


  

    return (
        <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...aboutData} />
    )


}

export default About;