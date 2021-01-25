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
    <div className="container blogCont">
      <div className="blogRightSide">
        <h1 >January</h1>
        {(blogsToMap.map((item , myKey) => (
          <ul>
            <li key={myKey}><a href={item.link}>{item.title}</a>
              <p className="blogDate">({item.monthCreated})</p>
            </li>
          </ul>
        )))}
      </div>
    </div>
  )
}