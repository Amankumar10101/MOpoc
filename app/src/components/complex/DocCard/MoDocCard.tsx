import { Card } from '@mui/material'
import React from 'react'
import MoTextfields from '../MoTextfield/MoTextfields'

const MoDocCard: React.FC = () => {
  return (
    <Card sx={{width: '74.35rem', height: '16.125rem', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15), -1px 0px 4px 0px rgba(0, 0, 0, 0.15)', backgroundColor: '#FFF', borderRadius: "5px",flexShrink:'0'}}>
      <MoTextfields/>
    </Card>
    // <div>
    //   <div style={{ width: '74.35rem', height: '16.125rem', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15), -1px 0px 4px 0px rgba(0, 0, 0, 0.15)', backgroundColor: '#FFF', borderRadius: "5px",flexShrink:'0' }}></div>
    // </div>
  )
}

export default MoDocCard