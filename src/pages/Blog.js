import React, { useEffect, useState } from "react";
import '../styleSheets/blog.css';
import blogsJson from '../blogs.json';


export default function Blog() {

  const [blogsToMap, setBlogsToMap] = useState([]);

  useEffect(() => {
    setBlogsToMap(blogsJson)
  }, []
  );

  return (
    <div className="blogRightSide container-fixed">
      <h1 id="blog-header">Blog</h1>
      <h2 id="month-header">March</h2>
      {(blogsToMap.map((item, myKey) => (
        <ul id="blog-list">
          <li id="blog-item" key={myKey}><a href={item.link}>{item.title}</a>
            <p id="blog-date">({item.monthCreated})</p>
          </li>
        </ul>
      )))}
    </div>
  )
}