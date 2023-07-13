"use client";
// import "../page.css";
import MoFormBuilder from "../../src/components/complex/MoFormBuilder/MoFormBuilder";
import { IActionComponent } from "../../src/interfaces/components/Action";
import Card from "@mui/material/Card";
import { providerData } from "@/app/src/metaData/formData/createNewProjectProvider";
import { Div } from "@/app/src/components/atomic/MoMolecules/Molecules";
import MoTitleDetails from "@/app/src/components/shared/MoTitle&Details/MoTitle&Details";
import '../../src/styles/Pages/createNewProject/createNewProject.scss';
import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";


function Provider({onBackClick}:IActionComponent) {


    const onContinueClick = (aboutData: IFormElements[]) => {
        // const formUpdate: IFormElements[] = aboutData.reduce(
        //     (acc: any, { name, value }: IFormElements) => {
        //       if (name) {
        //         acc[name] = value;
        //       }
        //       return acc;
        //     },
        //     { email } as unknown as IFormElements[]
        //   );
        //   console.log('formData is', formUpdate)

        //   patchData(Users.updateProfile, formUpdate)
        //   .then((response: any) => {
        //     console.log(response.data);
    
        //   })
        //   .catch((error: any) => {
        //     console.error(error);
        //   });
      
      
        
    
    }

    return (
        <Card className="provider-card">
            <Div>
                <Div className="provider-sub-content">
                    <MoTitleDetails title="Project Title" description="Fitness App UX/UI Design Project" />
                    <MoTitleDetails title="Category" description="Design" />
                </Div>
                <MoTitleDetails
                    title="Description"
                    description="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing interfaces that will enhance the user experience of our fitness app."
                />
            </Div>
            <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...providerData} />

        </Card>
    )


}

export default Provider;