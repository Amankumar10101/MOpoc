'use client'
import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
import Headline from '@/components/Typography/Headline';
import ButtonSecondary from '@/components/Button/ButtonSecondary';
import Image from "next/image";
// import MoButton from '@/components/MoButton/MoButton';

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
184
const CardList: React.FC = () => {

    return (
        <>
            <div style={{ backgroundColor: '#FFF', height: '100%' }}>
                {/* <Image style={{ marginTop: '1.57vw', paddingLeft: '1.56vw' }} src="/Image/Mo-logo.png" alt="logo" width={96.88} height={42} /> */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.625vw' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Headline text='Create your account' />
                        <div style={{ marginTop: '5.55vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Headline text='I am a' />
                            <CardContainer container>


                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <StyledCard  >
                                        <Image  src='/Image/Hobbies Hobbies Fill.png' alt='Provider' width={128} height={184} style={{height: '66%', width: '63%'}}/>
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
                        </div>
                    </div>

                    
                </div>
                {/* <ButtonSecondary  name='Back' top='40rem' left='1.5625vw' /> */}



            </div>

        </>
    );
};

export default CardList;