'use client'


import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import { addressData } from "@/app/metaData/formData/address";
import {ActionComponent} from '../../interface';

function Address({onContinueClick,onBackClick}:ActionComponent) {



    return (
        <MoFormBuilder onBackClick={onBackClick} onContinueClick={onContinueClick} {...addressData} />

    )


}

export default Address;