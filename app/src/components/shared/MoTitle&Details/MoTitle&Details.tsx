import { Div } from "../../atomic/MoMolecules/Molecules";
import { ITitleDetails } from "@/app/src/interfaces/components/TitleDetails";


export default function MoTitleDetails({title, description}:ITitleDetails) {
    return (
        <Div className="mo-title-details">
            <span>{title}</span>
            <p>{description}</p>
        </Div>
    );
}