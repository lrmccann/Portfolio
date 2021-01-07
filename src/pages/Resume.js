import React from "react";
import '../styleSheets/resume.css';
import resume from '../page-images/logan-resume-with-links.pdf';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

const resumeDownload = require('../page-images/logan-resume-with-links.pdf');

export default function Resume() {


    return (
        <div className='resumeCont'>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js'>
                <a className="downloadBtn" target='blank' href={resumeDownload} download='../page-images/logan-resume-with-links.pdf'>
                    <p style={{ height: '50px', width: '115px', color: 'black', border: 'solid black 1px', paddingTop: '4%' }}>Download</p>
                </a>
                <div id="pdfviewer" className="pdfviewer">
                    <Viewer defaultScale={1.50} fileUrl={resume} />
                </div>
            </Worker>
        </div>
    )
}