'use client'
import "./page.scss";
import MoFormBuilder from "../../src/components/complex/MoFormBuilder/MoFormBuilder";
import { projectDetailData } from "@/app/src/metaData/formData/projectDetails";
import { IActionComponent } from "../../src/interfaces/components/Action";
import Card from "@mui/material/Card";
import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";



function ProjectDetails({onBackClick}:IActionComponent) {


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

    return (<Card className="createNewProjectCard">
    <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...projectDetailData} />
    </Card>
    )


}

export default ProjectDetails;