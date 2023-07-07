import React from "react";
import "./upload.css";
import FileBrowser from "./upload";

const Attachment = () => {
  return (
    <div className="App">
      {/* <h1>File Browser</h1> */}
      <FileBrowser
        acceptedFileTypes={["image/jpg"]}
        labelIdle={'Drop your file or <span class="filepond--label-action">browse</span>'}
        multipleFiles={false}
        showFileDetails={true} files={undefined}      />
    </div>
  );
};

export default Attachment;
