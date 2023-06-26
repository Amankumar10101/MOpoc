'use client'

import MoCard from "../../../components/MoCard/MoCard";
import { useState,useEffect } from 'react';
// import data from "../../data/purchaserDashboard.json";
// import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../../components/MoTextfield/MoTextfields";
import "./optionalSignUp.css";
import Tab from '../../../components/Tab/Tab';
import About from "../about/about";
import Address from "../address/address";
import Experience from "../experience/experience";
// import PairHashPack from "../../Hashpack/hashpack";

function OptionalSignUp() {

    const [isClicked, setIsClicked] = useState<number>(0);

    const onContinueClick = () => {
        console.log("clicked");
        console.log();
        setIsClicked(1);

    }
    useEffect(()=>{
      },[isClicked]);
    const tabs = [
        { label: 'About', component: <About onContinueClick={onContinueClick} /> },
        { label: 'Address', component: <Address onContinueClick={onContinueClick} /> },
        { label: 'Experience', component: <Experience onContinueClick={onContinueClick} /> },
        { label: 'Wallet', component: <Experience onContinueClick={onContinueClick} /> },
    ]



    return (
        <div className="optional-signup-page"
        >
            <Tab isClicked={isClicked} setIsClicked={setIsClicked}  className="signUp-center-tab" width="550px" tabs={tabs} />

        </div>
    )


}

export default OptionalSignUp;