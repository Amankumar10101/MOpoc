'use client'


import "../../../../styles/Pages/signUp/signup.scss";
import MoFormBuilder from "../../MoFormBuilder/MoFormBuilder";
import { addressData } from "@/app/src/metaData/formData/address";
import {IActionComponent} from '../../../../interfaces/components/Action';
import { decodeToken } from "@/app/src/utils/tokenDecode";
import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";
import { patchData } from "@/app/src/services/api";
import { Users } from "@/app/src/services/endpoint";

function Address({onBackClick}:IActionComponent) {

    
    const email = decodeToken().email

   
    const onContinueClick = (addressData: IFormElements[]) => {
        const formUpdate: IFormElements[] =addressData.reduce(
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
        <MoFormBuilder onBackClick={onBackClick} onContinueClick={onContinueClick} {...addressData} />

    )


}

export default Address;