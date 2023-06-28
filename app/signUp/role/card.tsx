import React from 'react'
import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
import cardData from '../../metaData/cardData/cardData.json'
import Image from "next/image";

interface CardProps{
    imageURL: string;
    title: string;
    label: string;
}
const CardContainer = styled(Grid)(({ theme }: { theme: Theme }) => ({
  width: '39.5vw',
  marginTop: theme.spacing(1.31),
  display: 'flex',
  justifyContent: 'space-between',
  // maxWidth: 300,
  maxWidth: '31.625rem',
}));


const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  width: '15.86vw',
  height: '21.56vw',
  marginBottom: theme.spacing(6.25),
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center'

}));

const CustomCard: React.FC<CardProps> = (props:any) => {
  return (
    <CardContainer container>


    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <StyledCard  >
            <Image  src={props.imageURL} alt={props.label} width={128} height={184} style={{height: '66%', width: '63%'}}/>
        </StyledCard>
        <div >{props.title}</div>
    </div>


    {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <StyledCard>
        <Image  src='/Image/Brazuca Planning.png' alt='Provider' width={128} height={184} style={{height: '66%', width: '63%'}}/>
        </StyledCard>
        <div>{props.title}</div>
    </div>  */}

</CardContainer>
  )
}

export default CustomCard;