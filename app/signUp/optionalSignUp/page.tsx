'use client'

import { useState,useEffect } from 'react';
import "../../src/styles/components/shared/optionalSignUp.scss";
import Tab from '../../src/components/complex/Tab/Tab';
import About from "../../src/components/complex/ExtraDetail/about/about";
import Address from "../../src/components/complex/ExtraDetail/address/address";
import Experience from "../../src/components/complex/ExtraDetail/experience/experience";
import Wallet from "../../src/components/complex/ExtraDetail/wallet/wallet";




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