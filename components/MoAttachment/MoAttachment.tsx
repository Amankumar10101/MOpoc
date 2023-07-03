import React, { ChangeEvent, useState } from "react";
import FileUpload from "react-mui-fileuploader"
import MoTextfields from "../MoTextfield/MoTextfields"
import './MoAttach.css'
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export default function MuiFileUploader() {
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const [filesToUpload, setFilesToUpload] = useState<Array<File>>([])

    const handleClick = () => {
        console.log(hiddenFileInput?.current?.click());

    };
    const handleChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        filesToUpload.push(file);
        console.log(filesToUpload);
        // props.handleFile(fileUploaded);
    }
    //   const handleFilesChange = (files) => {
    //     // Update chosen files
    //     setFilesToUpload([ ...files ])
    //   };

    const uploadFiles = () => {
        // Create a form and post it to server
        // let formData = new FormData()
        // filesToUpload.forEach((file) => formData.append("files", file))

        // fetch("/file/upload", {
        //     method: "POST",
        //     body: formData
        // })
    }

    return (
        <>
            <input className="attach" type="file" ref={hiddenFileInput}
                onChange={handleChange} />
            <button onClick={handleClick}>hgf</button>
            <div className="attach-container">
                drag and drop or browse
            </div>

        </>
    )
}

