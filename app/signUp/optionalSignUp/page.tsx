'use client'

import MoCard from "../../../components/MoCard/MoCard";
import { useState,useEffect } from 'react';
import MoTextfields from "../../../components/MoTextfield/MoTextfields";
import "./optionalSignUp.css";
import Tab from '../../../components/Tab/Tab';
import About from "../about/about";
import Address from "../address/address";
import Experience from "../experience/experience";
import Wallet from "../wallet/wallet";


function OptionalSignUp() {

    const [isClicked, setIsClicked] = useState<number>(0);
    const [isBackClicked, setIsBackClicked] = useState<number>(0);

    const onContinueClick = () => {
        console.log("clicked");
      
        setIsClicked(1);

    }
    const onBackClick = () => {
        console.log("Backclicked");
      
        setIsBackClicked(1);

    }
    useEffect(()=>{
      },[isClicked]);
    const tabs = [
        { label: 'About', component: <About onBackClick={onBackClick} onContinueClick={onContinueClick} /> },
        { label: 'Address', component: <Address onBackClick={onBackClick} onContinueClick={onContinueClick} /> },
        { label: 'Experience', component: <Experience onBackClick={onBackClick} onContinueClick={onContinueClick} /> },
        { label: 'Wallet', component: <Wallet /> },
    ]



    return (
        <div className="optional-signup-page"
        >
            <Tab isClicked={isClicked} setIsClicked={setIsClicked} isBackClicked={isBackClicked} setIsBackClicked={setIsBackClicked}  className="signUp-center-tab" width="550px" tabs={tabs} />

        </div>
    )


}

export default OptionalSignUp;