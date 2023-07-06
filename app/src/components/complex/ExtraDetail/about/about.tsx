import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";
import { aboutData } from "@/app/src/metaData/formData/aboutForm";
import { patchData } from "@/app/src/services/api";
import { Users } from "@/app/src/services/endpoint";
import { decodeToken } from "@/app/src/utils/tokenDecode";

import { IActionComponent } from '../../../../interfaces/components/Action';
import MoFormBuilder from "../../MoFormBuilder/MoFormBuilder";

import "../../../../styles/Pages/signUp/signup.scss";

function About({onBackClick}:IActionComponent) {

    const email = decodeToken().email

   
    const onContinueClick = (aboutData: IFormElements[]) => {
        const formUpdate: IFormElements[] = aboutData.reduce(
            (acc: any, { name, value }: IFormElements) => {
              if (name) {
                acc[name] = value;
              }
              return acc;
            },
            { email } as unknown as IFormElements[]
          );
          console.log('formData is', formUpdate)

          patchData(Users.updateProfile, formUpdate)
          .then((response: any) => {
            console.log(response.data);
    
          })
          .catch((error: any) => {
            console.error(error);
          });
      
      
        
    
    }
    return (
        <MoFormBuilder onContinueClick={onContinueClick} onBackClick={onBackClick} {...aboutData} />
    )


}

export default About;