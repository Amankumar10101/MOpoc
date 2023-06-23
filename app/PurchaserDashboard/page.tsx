'use client'
import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import SidePanel from '../../components/Menu/SidePanel';
import Tab from '../../components/Tab/Tab';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import About from '../signUp/about/about';
import { useTranslation } from 'next-i18next';
// import '../../i18n/config'







const PurchaserDashboard: FC = () => {

    const { t } = useTranslation();

    const tabs = [
        {label: 'new', component: <ButtonPrimary key='button' name={'New'} left={''} top={''} />},
        {label: 'old', component: <About />},
    ]

   
    return (
        <>
            {/* <Header/> */}
         <h1>{t('one')}</h1>
            <SidePanel/>
            <Tab tabs={tabs}/>
            {/* <h1>{t('one')}</h1>
            <h1>hii</h1> */}
           

        </>
    );
};

export default PurchaserDashboard;
