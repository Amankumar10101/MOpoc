import React from 'react'
import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
import cardData from '../../metaData/cardData/cardData.json'

interface CardProps{
    imageURL?: string;
    title: string;
    label: string;
}

function CustomCard: React.FC<CardProps> ;(props:any) => {
  return (
    <CardContainer container>


    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <StyledCard  >
            <Image  src={props.imageURL} alt={props.label} width={128} height={184} style={{height: '66%', width: '63%'}}/>
        </StyledCard>
        <div >Provider</div>
    </div>


    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <StyledCard>
        <Image  src='/Image/Brazuca Planning.png' alt='Provider' width={128} height={184} style={{height: '66%', width: '63%'}}/>
        </StyledCard>
        <div>Purchaser</div>
    </div> 

</CardContainer>
  )
}

export default CustomCard;