'use client'

import {Headline} from '../../../components/MoMolecules/Molecules'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import './page.css';
import MoFormBuilder from "../../../components/MoFormBuilder/MoFormBuilder";
import { formData } from "../../metaData/formData/createPassword";


function CreatePassword() {
    return (
      <div style={{ backgroundColor: '#FFF'}}>
        {/* <Image style={{ marginTop: '1.57vw', paddingLeft: '1.56vw' }} src="/Image/Mo-logo.png" alt="logo" width={96.88} height={42} /> */}
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ marginTop: '0.38rem' }}>
            <Headline text='Reset Password' />
          </div>
          <div style={{ marginTop: '3.7rem',display:'flex' , alignItems:'center',flexDirection:'column' }}>
            <p style={{ color: '#74777A', fontFamily: 'Roboto', fontSize: '1.375rem', lineHeight: '1.75rem' }}>Create new password</p>
          </div>
          <MoFormBuilder {...formData()} />
        </div>
      </div>
  )
}

export default CreatePassword;