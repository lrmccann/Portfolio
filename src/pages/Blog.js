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
      <h1>Blog</h1>
      <h2>March</h2>
      {(blogsToMap.map((item, myKey) => (
        <ul>
          <li key={myKey}><a href={item.link}>{item.title}</a>
            <p className="blogDate">({item.monthCreated})</p>
          </li>
        </ul>
      )))}
    </div>
  )
}