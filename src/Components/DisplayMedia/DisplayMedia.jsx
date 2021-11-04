import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
// import DisplayMediaCard from "./../DisplayMediaCard/DisplayMediaCard.component";

const DisplayMedia = () => {
  const { username } = useParams();
  const { type } = useParams();
  const { id } = useParams();
  const [pics, setPics] = useState();

  useEffect(() => {
    const options = {
      url: "https://masai-project.herokuapp.com/product_data",
      method: "GET",
    };
    axios.request(options).then((data) => {
      setPics(data.data);
      console.log(data);
    });
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      {pics
        ? pics
            .filter((obj) => obj.id === id)
            .map((pic) => {
              return (
                <div className="media-card">
                  <div className="post-card">
                    <img src={pic.images[0]} alt="img" className="post-pic" />
                    <span style={{ background: "transparent" }}>
                      By: {pic.title}
                    </span>
                  </div>
                </div>
              );
            })
        : null}
    </div>
  );
};

export default DisplayMedia;
