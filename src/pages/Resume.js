/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../page-images/LoganMcCann.pdf';
import '../styleSheets/resume.css';

const resumeDownload = require('../page-images/LoganMcCann.pdf');

export default function Resume () {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [beingResized, setBeingResized] = useState(false);
  const [zoomScale, setZoomScale] = useState(1.5);

  useEffect(function setupListener () {
    function handleResize () {
      setBeingResized(true);
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return function cleanupListener () {
      window.removeEventListener('resize', handleResize);
      setBeingResized(false);
    }
  })

  useEffect(() => {
    if (screenWidth <= 599) {
      setZoomScale(0.59)
    } else if (screenWidth >= 600 && screenWidth <= 991) {
      setZoomScale(1)
    } else {
      setZoomScale(1.5)
    }
  }, [screenWidth])

  if (beingResized === true) {
    return (
      <div><p>Being resized</p></div>
    )
  } else {
    return (
      <div className="resume-page container-fixed">
        <h1 id="resume-header">Resume</h1>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
          <a
            className="download-btn"
            target="blank"
            href={resumeDownload}
            download="../page-images/logan-resume-with-links.pdf"
          >
            <FontAwesomeIcon className="download-icon btn-md" icon={faDownload} />
          </a>
          <div id="pdfviewer" className="pdfviewer">
            <Viewer defaultScale={zoomScale} fileUrl={resume} />
          </div>
        </Worker>
      </div>
    );
  }
}
