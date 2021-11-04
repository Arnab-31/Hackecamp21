import { useState, useEffect } from "react";
import { createClient } from "pexels";
import { useHistory } from "react-router-dom";
import axios from "axios"
import "./PostGrid.styles.css";
const PostGrid = ({username}) => {
  let history = useHistory();
  const [pics, setPics] = useState();
  useEffect(() => {
    const options = {
      url: "https://masai-project.herokuapp.com/product_data",
      method:"GET"
    };
    axios.request(options).then((data) => setPics(data.data));
  }, []);

  return (
    <div className="post-container">
      {pics
        ? pics.map((pic) => {
            return (
              <div className="post-card">
                <img src={pic.images[0]} alt="img" className="post-pic" onClick={() =>{history.push(`${username}/post/${pic.id}`)}} />
                <span style={{ background: "transparent" }}>
                  By: {pic.title}
                </span>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default PostGrid;
