import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import { aboutForm } from "@/app/metaData/formData/aboutForm";

function About() {

   

    return (
        <MoFormBuilder {...aboutForm} />
    )


}

export default About;