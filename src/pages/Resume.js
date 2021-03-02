import React from "react";
import '../styleSheets/resume.css';
import resume from '../page-images/logan-resume-with-links.pdf';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const resumeDownload = require('../page-images/logan-resume-with-links.pdf');

export default function Resume() {
    return (
        <div className='resumeCont container-fixed'>
            <h1>Resume</h1>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js'>
                <a className="downloadBtn" target='blank' href={resumeDownload} download='../page-images/logan-resume-with-links.pdf'>
                    <FontAwesomeIcon className="downloadIcon btn-md" icon={faDownload} />
                </a>
                <div id="pdfviewer" className="pdfviewer">
                    <Viewer defaultScale={1.50} fileUrl={resume} />
                </div>
            </Worker>
        </div>
    )
}