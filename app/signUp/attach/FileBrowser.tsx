import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FilePondErrorDescription, FilePondFile } from "filepond";
import CloseIcon from "@mui/icons-material/Close";
import "./upload.css";
import { MyFile } from "@/app/src/interfaces/components/Doc";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize
);



interface FileBrowserProps {
  acceptedFileTypes: string[];
  labelIdle: string;
  multipleFiles?: boolean;
  showFileDetails?: boolean;
  attach: MyFile[];
  setAttach:Function ; 
  type:string;
}

const FileBrowser: React.FC<FileBrowserProps> = ({
  acceptedFileTypes,
  showFileDetails = false,
  labelIdle,
  multipleFiles = true,
  attach,
  setAttach,type
}) => {

  const handleAddFile = (
    error: FilePondErrorDescription | null,
    file: FilePondFile,
    fileType:string
  ) => {
    console.log(fileType);
    
    if (error) {
      console.error("There was an error adding the file:", error);
      return;
    }

    const actualFile = file.file;
    console.log("File added:", actualFile.name);

    const myFile: MyFile = {
      name: actualFile.name,
      filename: actualFile.name,
      fileSize: actualFile.size,
      fileType:fileType
    };

    if (!multipleFiles) {
      setAttach([myFile]);
    } else {
      setAttach((oldFiles: MyFile[]) => [...oldFiles, myFile]);
    }
    console.log(attach);
    
  };
  const handleRemoveButtonClick = (file: MyFile) => {
    const updatedFiles = attach.filter((f) => f.name !== file.name);
    setAttach(updatedFiles);
  };

  const handleRemoveFile = (error: FilePondErrorDescription | null, fileItem: FilePondFile) => {
    if (error) {
      console.error("There was an error removing the file:", error);
    } else {
      handleRemoveButtonClick({
        name: fileItem.file.name,
        filename: fileItem.file.name,
        fileSize: fileItem.file.size,
        fileType: fileItem.file.type,
      });
    }}

  return (
    <div className="App">
      {showFileDetails && (
        <ul>
          {attach.map((file) => 
            
              file.fileType === type && (<li key={file.name}>
                <span>{file.filename}</span> <span>{file.fileSize} bytes</span>
                <button onClick={() => handleRemoveButtonClick(file)}>
                  <CloseIcon />
                </button>
              </li>)
            
          )}
        </ul>
      )}
      <FilePond
        allowFileSizeValidation={true}
        allowFileTypeValidation={true}
        acceptedFileTypes={acceptedFileTypes}
        maxFileSize="2MB"
        labelMaxFileSizeExceeded="Files can not be larger than 2MB"
        allowMultiple={multipleFiles}
        name="files"
        labelIdle={labelIdle}
        className="file-browser-button"
        onaddfile={(error, file) => handleAddFile(error, file, type)}
        onremovefile={handleRemoveFile}
      />
    </div>
  );
};

export default FileBrowser;
