'use client'


import "../../../../styles/Pages/signUp/signup.scss";
import MoFormBuilder from "../../MoFormBuilder/MoFormBuilder";
import { addressData } from "@/app/src/metaData/formData/address";
import {IActionComponent} from '../../../../interfaces/components/Action';

function Address({onContinueClick,onBackClick}:IActionComponent) {



    return (
        <MoFormBuilder onBackClick={onBackClick} onContinueClick={onContinueClick} {...addressData} />

    )


}

export default Address;