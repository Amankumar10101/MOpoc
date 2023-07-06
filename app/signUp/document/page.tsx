'use client'

import MoDocCard from '@/app/src/components/complex/DocCard/MoDocCard';
import { MoDocCardProps } from '@/app/src/interfaces/components/Doc';
import docData from '../../src/metaData/docData/docData.json';
import React from 'react'

const Document: React.FC<MoDocCardProps> = () => {
    return (
        <>
            <div>
                {docData.map((doc: any) => (
                    <div>
                        <MoDocCard id={0} title={doc.title} label={doc.label}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Document;