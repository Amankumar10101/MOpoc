'use client'

import MoDocCard from '@/app/src/components/complex/DocCard/MoDocCard';
import { MoDocCardProps } from '@/app/src/interfaces/components/Doc';
import {docData} from '../../src/metaData/docData/docData';
import React, { useState } from 'react'

const Document: React.FC<MoDocCardProps> = () => {
    const [requirement,setRequirement] = useState('')
    const [addFile,setAddFile] = useState([])
    const handlePostFiles = () => {

    }
  
    return (
        <>
            <div>
                {docData.map((doc: any, index:number) => (
                    <div key={index}>
                        <MoDocCard onClick={()=>console.log("index",index)}  id={0} title={doc.title} label={doc.label} labelIdle={doc.labelIdle}
                        />
                    </div>
                ))}
                <button onClick={handlePostFiles}>Save and Continue</button>
            </div>
        </>
    )
}

export default Document;