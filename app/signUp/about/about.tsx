import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import { aboutData } from "@/app/metaData/formData/aboutForm";
import {IActionComponent} from '../../interface';


function About({onContinueClick,onBackClick}:IActionComponent) {


  

    return (
        <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...aboutData} />

    )


}

export default About;