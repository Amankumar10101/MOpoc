import React, { useState } from "react";
import FileUpload from "react-mui-fileuploader"
import MoTextfields from "../../complex/MoTextfield/MoTextfields"
import './MoAttach.css'

export default function MuiFileUploader() {
  const [filesToUpload, setFilesToUpload] = useState([])

//   const handleFilesChange = (files) => {
//     // Update chosen files
//     setFilesToUpload([ ...files ])
//   };

  const uploadFiles = () => {
    // Create a form and post it to server
    let formData = new FormData()
    filesToUpload.forEach((file) => formData.append("files", file))

    fetch("/file/upload", {
      method: "POST",
      body: formData
    })
  }

  return (
    <>
    <input className="attach" type="file" />
    {/* <button type="file"></button> */}
    <MoTextfields inputType="file" name="Hii" placeholder="attach photo" label="Attach Photo" ></MoTextfields>
      
      <FileUpload
        multiFile={true}
        // onFilesChange={handleFilesChange}
        onContextReady={(context) => {}}
        header=""
        showPlaceholderImage={false}
        title="File uploader"
        ContainerProps={{
            elevation: 0,
            variant: "elevation",
            sx: { p: 1 }
          }}
          BannerProps={{ elevation: 0, variant: "elevation" }}
      />
      <button onClick={uploadFiles}>Upload</button>
    </>
  )
}

