import { useState, useEffect } from "react";
import { createClient } from "pexels";
import "./PostGrid.styles.css";
const PostGrid = () => {
  const [pics, setPics] = useState();
  useEffect(() => {
    const client = createClient(
      "563492ad6f917000010000014310a01418d449b18fb334d6afb2f542"
    );
    const query = "Fashion Model Men";

    client.photos.search({ query, per_page: 15 }).then((photos) => {
      console.log(photos);
      setPics(photos.photos);
    });
    console.log("hello")
  },[]);

  return <div className="post-holder">{pics ? pics.map(pic => {return (<img src={pic.src.original} alt="img" className="post-pic"/>)}):null}</div>;
};

export default PostGrid;
