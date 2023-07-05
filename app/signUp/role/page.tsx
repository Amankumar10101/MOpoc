'use client'

// import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
import Headline from '@/app/src/components/atomic/MoTypography/Headline';
import { useEffect, useState } from 'react';
import cardData from '../../src/metaData/cardData/cardData.json'
import CustomCard from './card';
import { Link } from 'react-router-dom';



interface CardData {
    filename: string;
    imageURL: string;
    label: string;
    title: string;
}
// const CardList: React.FC = () => {

//     const [cards, setCards] = useState([])

//     useEffect(() => setCards(cardData), [])

//     return (
//         <div style={{ backgroundColor: '#FFF', height: '100%' }}>
//             <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '0.625vw' }}>
//                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     <Headline text='Create your account' />
//                     <div style={{ marginTop: '5.55vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//                         <Headline text='I am a' />
//                         <div style={{display:'flex', justifyContent:'center',marginTop:'1.63vw',marginLeft:'22vw'}}>
//                         <Link to={'/signup'}>
//                         {cards.map((card, index) => (
                            
//                             <CustomCard
//                                 key={index}
//                                 filename={card.filename}
//                                 imageURL={card.imageURL}
//                                 title={card.title}
//                                 label={card.label} />
                               
//                         ))}
//                          </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     )
// }

// export default CardList;