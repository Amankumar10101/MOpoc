'use client'
import React, { useState } from 'react';
import { Grid, CardMedia, Grow, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import cardData from './cardData.json'; // adjust path according to your file structure
import Image from 'next/image';

interface Card {
  image: string;
  name: string;
}

interface CardData {
  iamText: string;
  createAccountText: string;
  cards: Card[];
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  padding: '6.25rem',

}));

const StyledCard = styled(Paper)(({ theme }) => ({
  maxWidth: '12.6875rem', // set card width
  height: '17.25rem', // set card height
  margin: 'auto',
  cursor: 'pointer',
  transition: '0.3s',
  boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
  position: 'relative',
  '&:hover': {
    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15), -1px 0px 4px 0px rgba(0, 0, 0, 0.15)',
  },
}));



const ImageRectangle = styled('div')(({ theme }) => ({
  width: '12.6875rem',
  height: '0.4375rem',
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#00B7FD',
  borderRadius: '0 0 0.3125rem 0.3125rem',
}));
const StyledImageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%'
  }));

const ImageCard: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const data: CardData = cardData[0]; 

  return (
    <StyledGrid container direction="column" alignItems="center">
      <Box marginBottom={4}>
        <Typography variant="h4" align="center">
          {data.createAccountText}
        </Typography>
        <Typography variant="h4" sx={{marginTop: "4.44rem"}} align="center">
          {data.iamText}
        </Typography>
      </Box>
      <Grid container item xs={12} spacing={3}>
        {data.cards.map((card, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Grow in={true}>
              <div onClick={() => setActiveCard(index)}>
                <StyledCard>
                    <StyledImageContainer>
                  <Image
                     src={card.image}
                     alt={card.name}
                     width={128}
                     height={184}
                  />
                  </StyledImageContainer>
                  {activeCard === index && <ImageRectangle />}
                </StyledCard>
                <Typography variant="body1" sx={{textAlign: 'center', marginTop: '0.5rem'}}>
                  {card.name}
                </Typography>
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </StyledGrid>
  );
}

export default ImageCard;
