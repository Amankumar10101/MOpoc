'use client'
// import "../page.css";
import MoFormBuilder from "../../src/components/complex/MoFormBuilder/MoFormBuilder";
import { IActionComponent } from "../../src/interfaces/components/Action";
import Card from "@mui/material/Card";
import { providerData } from "@/app/src/metaData/formData/createNewProjectProvider";
import { Div } from "@/app/src/components/atomic/MoMolecules/Molecules";
import MoTitleDetails from "@/app/src/components/shared/MoTitle&Details/MoTitle&Details";



function Provider() {




    return (
        <Card>
            <Div>
                <Div>
                    <MoTitleDetails title="Project Title" description="Fitness App UX/UI Design Project" />
                    <MoTitleDetails title="Category" description="Design" />
                </Div>
                <MoTitleDetails
                    title="Description"
                    description="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing interfaces that will enhance the user experience of our fitness app."
                />
            </Div>
            <MoFormBuilder {...providerData} />

        </Card>
    )


}

export default Provider;