"use client";

import MoDocCard from "@/app/src/components/complex/DocCard/MoDocCard";
import { MoDocCardProps, MyFile } from "@/app/src/interfaces/components/Doc";
import { docData } from "../../src/metaData/docData/docData";
import React, { useState } from "react";

const Document: React.FC<MoDocCardProps> = () => {
  const [attach, setAttach] = useState<MyFile[]>([]);

  const handlePostFiles = () => {};

  

  return (
    <>
      <div>
        {docData.map((doc: any, index: number) => (
          <div key={index}>
            <MoDocCard
              id={0}
              title={doc.title}
              label={doc.label}
              labelIdle={doc.labelIdle}
              setAttach={setAttach}
              attach={attach}
              type={doc.type}           
            />
          </div>
        ))}
        <button onClick={handlePostFiles}>Save and Continue</button>
      </div>
    </>
  );
};

export default Document;
