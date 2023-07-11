'use client'

// const useStyles = makeStyles(() => ({
//     input:{
//         display: 'none,'
//     },
//     fileField: {
//         border: '1px dashed #ccc',
//         borderRadius: '4px',
//         padding: '16px',
//         textAlign: 'center',
//         cursor: 'pointer'
//         }
// }))

// const FileBrowser:React.FC = () => {
//     const[selectedFile,setSelectedFile] = useState<File | null>(null)
//     const classes =useStyles();
//     const handleFileChange = (event:ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if(file && file.size <= 100 * 1024 * 1024){
//             setSelectedFile(file);
//         }
//         else{
//             setSelectedFile(null);
//         event.target.value = '';
//         window.alert('Please select a file up to 100 mb in size.')
//         }
//     }
//   return (
//     <div>
//         <Input 
//         type="file"
//         inputProps={{accept: '.pdf,.doc.,.docx'}}
//         placeholder='Drop your file'
//         className={classes.input}
//         onChange={handleFileChange}
//         />
//         {selectedFile && (
//             <div>
//                 <p>Selected File : {selectedFile.name}</p>
//                 <p>File Type: {selectedFile.type}</p>
//             </div>
//         )}
//     </div>
//   )
// }
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


// Import React FilePond
import {FilePond,registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import  "./upload.css"
import CloseIcon from '@mui/icons-material/Close';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePondErrorDescription, FilePondFile } from 'filepond'

// // Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
registerPlugin(FilePondPluginFileValidateType)
registerPlugin(FilePondPluginFileValidateSize);

interface MyFile {
  name: string;
  filename : string;
  fileSize : string;
}

interface FileBrowserProps{
  acceptedFileTypes : string[];
  labelIdle : string;
  multipleFiles?: boolean;
 
  showFileDetails?:boolean;
}

// Our app
const FileBrowser: React.FC<FileBrowserProps> = ({acceptedFileTypes,showFileDetails=false,labelIdle,multipleFiles=true}) => {
  
  const [files, setFiles] = useState<MyFile[]>([])
  const handleAddFile = (error: FilePondErrorDescription | null, file: MyFile) => {
    if(!error){
      if(!multipleFiles){
        setFiles([file])
      }
      else{
        setFiles([...files,file]);
        console.log(file);
        
      }
    }
  };

  const handleRemoveFile = (file : MyFile) => {
    const updatedFiles = files.filter((f) => f !== file);
    setFiles(updatedFiles)
  };

  return (
    <div className='App' >
      {showFileDetails && (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <span>{file.filename}</span>  <span>{file.fileSize} bytes</span> 
              <button onClick={() => handleRemoveFile(file)}>
                <CloseIcon/>
              </button>
            </li>
          ))}
        </ul>
      )}
      <FilePond 
      
        onaddfile={handleAddFile}
        allowFileSizeValidation={true}
        allowFileTypeValidation={true}
        // acceptedFileTypes={['image/jpg','image/jpeg','image/png']}
        acceptedFileTypes={acceptedFileTypes}
        maxFileSize="2MB"
        labelMaxFileSizeExceeded='Files can not be larger than 2MB'
        allowMultiple={multipleFiles}
        server="/api"
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle={labelIdle}
        className="file-browser-button"
      />
      
    </div>
  )
}

export default FileBrowser