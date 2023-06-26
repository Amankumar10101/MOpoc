'use client'
import Headline from '@/components/Typography/Headline'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import ButtonSecondary from '@/components/Button/ButtonSecondary';
import ButtonPrimary from '@/components/Button/ButtonPrimary';

function password() {
  const [apiData,setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await fetch("")
        const data = await response.json();
        setApiData(data);
      }
      catch(error){
        console.error("Error fetching data from api")
      }
    };
    fetchData();
    return() =>{

    }
  },[])
    return (
    <>
      <div style={{ backgroundColor: '#FFF',height:'100%'}}>
        {/* <Image style={{ marginTop: '1.57vw', paddingLeft: '1.56vw' }} src="/Image/Mo-logo.png" alt="logo" width={96.88} height={42} /> */}
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ marginTop: '4.38rem' }}>
            <Headline text='Email Verification' />
          </div>
          <div style={{ marginTop: '13.5rem',display:'flex' , alignItems:'center',flexDirection:'column' }}>
            <p style={{ color: '#74777A', fontFamily: 'Roboto', fontSize: '1.375rem', lineHeight: '1.75rem' }}>Hi! we've sent a link to your email</p>

            <div style={{ color: '#585858', fontFamily: 'Roboto', fontSize: '1.375rem', lineHeight: '1.75rem', fontWeight: '700' }}>
              {apiData}
            </div>
            
            <p style={{ color: '#74777A', fontFamily: 'Roboto', fontSize: '1.375rem', lineHeight: '1.75rem' }}>Click on link to reset your password</p>
            
            <ButtonPrimary name='Resend Email'  />
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default password