/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import blogsJson from '../blogs.json';
import '../styleSheets/blog.css';

export default function Blog () {
  const [blogsToMap, setBlogsToMap] = useState([]);

  useEffect(() => {
    setBlogsToMap(blogsJson);
  }, []);

  return (
    <div className="blog-page container-fixed">
      <h1 id="blog-header">Blog</h1>
      <h2 id="month-header">March</h2>
      {blogsToMap.map((item, myKey) => (
        <ul key={myKey} id="blog-list">
          <li id="blog-item" key={myKey}>
            <a href={item.link}>{item.title}</a>
            <p id="blog-date">({item.monthCreated})</p>
          </li>
        </ul>
      ))}
    </div>
  );
}
