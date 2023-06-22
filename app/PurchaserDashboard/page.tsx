
import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import SidePanel from '../../components/Menu/SidePanel';
import Tab from '../../components/Tab/Tab';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import About from '../signUp/about/about';





const PurchaserDashboard: FC = () => {

    const tabs = [
        {label: 'new', component: <ButtonPrimary key='button' name={'New'} left={''} top={''} />},
        {label: 'old', component: <About />},
    ]

   
    return (
        <>
            <Header/>
            <SidePanel/>
            <Tab tabs={tabs}/>
           

        </>
    );
};

export default PurchaserDashboard;
