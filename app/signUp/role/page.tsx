'use client'

// import { Grid, Card, CardContent, Typography, styled, Theme, CardMedia } from '@mui/material';
<<<<<<< HEAD
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
=======
import Headline from '@/components/MoTypography/Headline';
import cardData from '../../src/metaData/cardData/cardData.json';
import { ICardProps} from '../../src/interfaces/components/Role';
import MoRole from '../../src/components/atomic/MoRole';
import Link from 'next/link';






const CardList: React.FC<ICardProps> = () => {



   
    
    
    return (
        <>
        <div style={{ backgroundColor: '#FFF', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '0.625vw' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Headline text='Create your account' />
                    <div style={{ marginTop: '5.55vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Headline text='I am a' />
                        <div style={{display:'flex', justifyContent:'center',marginTop:'1.63vw',marginLeft:'22vw'}}>
                        

                         {cardData.map((card : any) => (
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
        </>
    )
}

export default CardList;
>>>>>>> 4d7cd8a5fae4d002a411222a023034fa71ca348c
