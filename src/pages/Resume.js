import React, { useEffect, useState } from "react";
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../page-images/logan-resume-with-links.pdf';
import '../styleSheets/resume.css';

const resumeDownload = require('../page-images/logan-resume-with-links.pdf');

export default function Resume() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [zoomScale, setZoomScale] = useState(1.50);

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        if (screenWidth <= 599) {
            setZoomScale(.59)
        }
        else if (screenWidth >= 600 && screenWidth <= 991) {
            setZoomScale(1)
        } else {
            setZoomScale(1.50)
        }
    }, [setScreenWidth, screenWidth])

    return (
        <div className='resume-page container-fixed'>
            <h1 id="resume-header">Resume</h1>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js'>
                <a className="download-btn" target='blank' href={resumeDownload} download='../page-images/logan-resume-with-links.pdf'>
                    <FontAwesomeIcon className="download-icon btn-md" icon={faDownload} />
                </a>
                <div id="pdfviewer" className="pdfviewer">
                    <Viewer defaultScale={zoomScale} fileUrl={resume} />
                </div>
            </Worker>
        </div>
    )
}