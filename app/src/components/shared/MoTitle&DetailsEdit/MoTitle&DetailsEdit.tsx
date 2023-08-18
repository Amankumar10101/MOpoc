import { Div } from "../../atomic/MoMolecules/Molecules";
import { ITitleDetails } from "@/app/src/interfaces/components/TitleDetails";
import './MoTitle&DetailsEdit.scss';
import { ClassNames } from "@emotion/react";

export default function MoTitleDetails({title, description,className}:ITitleDetails) {
    return (
        <Div className={className?className:"mo-title-details"}>
            <span className="mo-title-details-label">{title}</span>
            <p className="mo-title-details-description">{description}</p>
        </Div>
    );
}