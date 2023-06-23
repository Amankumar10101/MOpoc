'use client'

import MoCard from "../../../components/MoCard/MoCard";
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../../components/MoTextfield/MoTextfields";
import "./optionalSignUp.css";
import Tab from '../../../components/Tab/Tab';
import About from "../about/about";
import Address from "../address/address";

function OptionalSignUp() {

    const tabs = [
        {label: 'address', component: <Address />},
        {label: 'about', component: <About />},
    ]

    

    return (
        <div 
        className="optional-signup-page"
        >
            <Tab tabs={tabs}/>        

        </div>
    )


}

export default OptionalSignUp;