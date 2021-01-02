import React, { useEffect, useState } from "react";
// import "../images/port-pic.jpeg";
import SideBar from "../components/SideBar";
import '../styleSheets/blog.css';
import blogsJson from '../blogs.json';


export default function Blog() {

  const [blogsToMap, setBlogsToMap] = useState([]);


  // const dates = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
  // var dateOfPost = null;
  // const sortMonths = async () => {
  // }
  // console.log(blogsToMap)



  useEffect(() => {
    setBlogsToMap(blogsJson)
  }, []
  );

  return (
    <div className="container-fixed blogCont">
      <SideBar />
      <div className="blogRightSide">
        <h1 className="dateTextOne">January</h1>
        {(blogsToMap.map((item) => (
          <ul style={{ color: 'whitesmoke' }}>
            <li id='blogItem'><a href={item.link} style={{ color: 'whitesmoke' }}>{item.title}</a>
              <p className="blogDate">({item.monthCreated})</p>
            </li>
          </ul>
        )))}
      </div>
    </div>

  )
}