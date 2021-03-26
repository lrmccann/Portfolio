/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import blogsJson from '../blogs.json';
import '../styleSheets/blog.css';

export default function Blog () {
  const [blogsToMap, setBlogsToMap] = useState([]);

  useEffect(() => {
    setBlogsToMap(blogsJson);
  }, []);

  // console.log(blogsToMap)
  console.log({ ...blogsJson })

  return (
    <div className="blog-page container-fixed">
      <h1 id="blog-header">Blog</h1>
      <h2 id="month-header">March</h2>
      {blogsToMap.map((item, myKey) => (
        <ul key={myKey} id="blog-list">
          <a id="blog-item" href={item.link}>
            <li key={myKey}>
              <h1>{item.title}</h1>
              <p id="blog-date">({item.monthCreated})</p>
            </li>
          </a>
        </ul>
      ))}
    </div>
  );
}
