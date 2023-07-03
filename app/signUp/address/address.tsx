'use client'


import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import { addressData } from "@/app/metaData/formData/address";
import {IActionComponent} from '../../interface';

function Address({onContinueClick,onBackClick}:IActionComponent) {



    return (
        <MoFormBuilder onBackClick={onBackClick} onContinueClick={onContinueClick} {...addressData} />

    )


}

export default Address;