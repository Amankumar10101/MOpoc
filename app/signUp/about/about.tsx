import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import { aboutData } from "@/app/metaData/formData/aboutForm";
import {ActionComponent} from '../../interface';


function About({onContinueClick,onBackClick}:ActionComponent) {


  

    return (
        <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...aboutData} />
    )


}

export default About;