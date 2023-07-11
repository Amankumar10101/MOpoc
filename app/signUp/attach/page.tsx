import React from "react";
import "./upload.css";
import FileBrowser from "./upload";

const Attachment = () => {
  const showFileDetails = true;
  return (
    <div className="App">
      {/* <h1>File Browser</h1> */}
      <FileBrowser
        acceptedFileTypes={["image/jpg","image/png"]}
        labelIdle={'Drop your file or <span class="filepond--label-action">browse</span>'}
        multipleFiles={false}
        showFileDetails={showFileDetails}       />
    </div>
  );
};

export default Attachment;
