import React from 'react'
import "./upload.css"
import FileBrowser from './upload'

const Attachment = () => {
  return (
    <div className='App'>
        {/* <h1>File Browser</h1> */}
      <FileBrowser acceptedFileTypes={['image/jpg']} files={undefined} onupdatefiles={function (files: any): void {
        throw new Error('Function not implemented.')
      } } />
    </div>
  )
}

export default Attachment