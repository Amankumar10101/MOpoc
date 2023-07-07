import { Div } from "../../atomic/MoMolecules/Molecules";
import { ITitleDetails } from "@/app/src/interfaces/components/TitleDetails";
import './MoTitle&Details.scss';

export default function MoTitleDetails({title, description}:ITitleDetails) {
    return (
        <Div className="mo-title-details">
            <span className="mo-title-details-label">{title}</span>
            <p className="mo-title-details-description">{description}</p>
        </Div>
    );
}