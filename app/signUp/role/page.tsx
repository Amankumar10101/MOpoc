'use client'


// import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
import Headline from '@/components/Typography/Headline';
import ButtonSecondary from '@/components/Button/ButtonSecondary';
import { useEffect, useState } from 'react';
import cardData from '../../metaData/cardData/cardData.json'
import CustomCard from './card';

interface CardData {
    imageURL: string;
    label: string;
    title: string;
}
const CardList: React.FC = () => {

    const [cards, setCards] = useState<CardData[]>([])

    useEffect(() => {
        setCards(cardData);
    },[])

    return (
        <div>
            {cards.map((card,index) => (
                <CustomCard
                    key={index}
                    imageURL={card.imageURL} 
                    title={card.title} 
                    label={card.label}             />
            ))}
        </div>
    )
}

export default CardList;