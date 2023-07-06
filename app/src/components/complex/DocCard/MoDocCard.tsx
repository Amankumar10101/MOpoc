import { Card } from '@mui/material'
import React from 'react'
import MoTextfields from '../../atomic/MoTextfield/MoTextfields';
import { MoDocCardProps } from '@/app/src/interfaces/components/Doc'
import FileBrowser from '@/app/signUp/attach/upload'
import MoButton from '../../shared/MoButton'






const MoDocCard: React.FC<MoDocCardProps> = ({ id, title, label }) => {
  return (
    <Card sx={{ width: '74.35rem', height: '16.125rem', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15), -1px 0px 4px 0px rgba(0, 0, 0, 0.15)', backgroundColor: '#FFF', borderRadius: "5px", flexShrink: '0' }}>
      <h5>{title}</h5>
      <MoTextfields multiline rows={4} width='71.875rem' backgroundColor='#FFF' placeholder={label} />
      <div>
        {/* <MoButton name={<FileBrowser acceptedFileTypes={[]} labelIdle={'Add Attachment'} files={undefined} onupdatefiles={function (files: any): void {
          throw new Error('Function not implemented.')
        } }/>}/> */}
        <FileBrowser acceptedFileTypes={[]} labelIdle={'Add Attachment'} 
        // files={undefined} 
        // onupdatefiles={function (files: any): void {
        //   throw new Error('Function not implemented.')
        }} />
      </div>
    </Card>
    // <div>
    //   <div style={{ width: '74.35rem', height: '16.125rem', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15), -1px 0px 4px 0px rgba(0, 0, 0, 0.15)', backgroundColor: '#FFF', borderRadius: "5px",flexShrink:'0' }}></div>
    // </div>
  )
}

export default MoDocCard