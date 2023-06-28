'use client'
import "../page.css";
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import { addressData } from "@/app/metaData/formData/address";


function Address() {
    
    return (
        <MoFormBuilder {...addressData} />
    )


}

export default Address;