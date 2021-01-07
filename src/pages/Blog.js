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
        <h1 className="dateTextOne">January</h1>
        {(blogsToMap.map((item) => (
          <ul style={{ color: 'black' }}>
            <li id='blogItem'><a href={item.link} style={{ color: 'black' }}>{item.title}</a>
              <p className="blogDate">({item.monthCreated})</p>
            </li>
          </ul>
        )))}
      </div>
    </div>
  )
}