'use client'

// import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
import Headline from '@/components/MoTypography/Headline';
import cardData from '../../metaData/cardData/cardData.json'
import {IActionCard, ICardProps} from '../../src/interfaces/components/Role';
import MoRole from '../../src/components/atomic/MoRole';
import Link from 'next/link';






const CardList: React.FC<IActionCard> = () => {



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
                        
                         {cardData.map((card : ICardProps) => (
                           <Link 
                           key={card.id} 
                           href={{
                             pathname: "/signUp",
                             query: { title: card.title.toUpperCase() },
                           }}>
                           <div>
                             <MoRole 
                               filename={card.filename}
                               title={card.title}
                               label={card.label} 
                               id={0} />
                           </div>
                         </Link>
                                 
                        ))} 
                        
                       
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default CardList;