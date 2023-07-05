import React from 'react'
import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
import Image from "next/image";
import { useRouter } from 'next/router';

interface CardProps{
  id:number
  filename: string
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
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',

}));

const CustomCard: React.FC<CardProps> = (props) => {
  const router = useRouter();

    const handleCardClick = () => {
        router.push('/signUp')
    }
  // const getImageUrl = (filename) => {
  //   return require(``).default
  // }
  return (
    <>
    <div >
    <CardContainer container>


    <div style={{ display: 'flex', alignItems:'center',flexDirection: 'column' }}>
        <StyledCard onClick={handleCardClick} >
            <Image  src={`/image/${props.filename}`} alt={props.label} width={128} height={184} style={{height: '66%', width: '63%'}}/>
            {/* <CardMedia component="img" height="140" image={getImageUrl(props.filename)} alt={props.label} /> */}
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
</div>
</>
  )

}

export default CustomCard;