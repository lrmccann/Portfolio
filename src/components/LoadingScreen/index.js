/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import ReactLoading from 'react-loading';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

export default function LoadingScreen () {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => (
//       setLoading(false)
//     ), 2 * 100)
//   }, [])
// console.log(loading, "i am loading")
  return(
    <div className="container-fixed loading-page">
      <h1>Loading</h1>
    </div>
  )
}
