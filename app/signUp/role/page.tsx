'use client'

// import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
import Headline from '@/components/MoTypography/Headline';
import { useEffect, useState } from 'react';
import cardData from '../../metaData/cardData/cardData.json'
import CustomCard from './card';
import { useRouter } from 'next/router';

interface CardData {
    id: number;
    filename: string;
    title: string;
    label: string;
}

interface MainPageprops{}

const CardList: React.FC<MainPageprops> = () => {

    

    // const [cards, setCards] = useState()

    // useEffect(() => setCards(cardData), [])
    console.log(cardData);
    
    
    return (
        <div style={{ backgroundColor: '#FFF', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '0.625vw' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Headline text='Create your account' />
                    <div style={{ marginTop: '5.55vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Headline text='I am a' />
                        <div style={{display:'flex', justifyContent:'center',marginTop:'1.63vw',marginLeft:'22vw'}}>
                        
                        {/* {cardData.map((card : CardData) => (
                            
                            <CustomCard 
                           
                                key={card.id}
                                filename={card.filename}
                                title={card.title}
                                label={card.label} id={0} />
                                 
                        ))} */}
                        
                       
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default CardList;