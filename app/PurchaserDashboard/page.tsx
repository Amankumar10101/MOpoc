'use client'
import React, { FC } from 'react';
import Header from '../src/components/complex/Header/Header';

import Tab from '../src/components/complex/Tab/Tab';
import ButtonPrimary from '../src/components/atomic/Button/ButtonPrimary';
import About from '../signUp/about/about';
import { getTranslation, changeLanguageToEs} from '../../i18n/config';
import SidePanel from '../src/components/complex/Menu/SidePanel';








const PurchaserDashboard: FC = () => {

    const  t  = getTranslation();
    // changeLanguageToEs();

    const tabs = [
        {label: 'new', component: <ButtonPrimary key='button' name={'New'} left={''} top={''} />},
        // {label: 'old', component: <About />},
    ]

   
    return (
        <>
            {/* <Header/> */}
         <h1>{t('one')}</h1>
            <SidePanel/>
            {/* <Tab tabs={tabs}/> */}
            {/* <h1>{t('one')}</h1>
            <h1>hii</h1> */}
           

        </>
    );
};

export default PurchaserDashboard;
