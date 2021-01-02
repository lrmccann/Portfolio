import React from "react";
import '../styleSheets/resume.css';
import resume from '../page-images/logan-resume-with-links.pdf';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

const resumeDownload = require('../page-images/logan-resume-with-links.pdf');

export default function Resume () {

    
    return (
        <div className='resumeCont'>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js'>
        <button className="downloadBtn"> <a  className="anchorDownload" target='blank' href={resumeDownload} download='../page-images/logan-resume-with-links.pdf'><p style={{borderBottom: 'solid whitesmoke 1px' , paddingBottom: '4%' , color: 'whitesmoke'}}>Download</p></a></button>
                <div id="pdfviewer" className="pdfviewer">
                <Viewer defaultScale={1.50} fileUrl={resume} />
                </div>




            </Worker>
        
        {/* <div className="resumeCont">
            <button className="downloadBtn" onClick={downloadResume}><h6 style={{fontSize: '14px' , color: 'whitesmoke'}}> <a style={{color: 'whitesmoke'}} href="../page-images/logan-resume-with-links.pdf" download='Logan-McCann-Resume' >Download</a></h6></button>
            <img className="resumeImg" src={require('../page-images/logan-resume-with-links.pdf')}>
            </img>
        </div> */}
        </div>
    )
}