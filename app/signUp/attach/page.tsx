import React from 'react'
import "./upload.css"
import FileBrowser from './upload'

const Attachment = () => {
  return (
    <div className='App'>
        {/* <h1>File Browser</h1> */}
      <FileBrowser acceptedFileTypes={['image/jpg']} labelIdle={'Drop your file or <span class="filepond--label-action">browse</span>'} files={undefined} onupdatefiles={function (files: any): void {
        throw new Error('Function not implemented.')
      } } />
    </div>
  )
}

export default Attachment