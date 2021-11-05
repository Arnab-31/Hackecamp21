import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./DisplayMedia.styles.css";
const DisplayMedia = () => {
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
                  <div className="media-card-img">
                    {pic.images.map((img) => {
                      return <img src={img} alt="img" className="media-pic" />;
                    })}
                  </div>
                  <div className="media-product-detail">
                    <span className="title-tab">
                      <span
                        className="product-title"
                        style={{ fontWeight: "bold" }}
                      >
                        {pic.brand}
                      </span>
                      <span className="product-title" style={{ color: "gray" }}>
                        {pic.sub_heading}
                      </span>
                    </span>

                    <hr style={{ width: "100%" }} />
                    <span className="price-tab">
                      <span>₹{pic.dis_price}</span>
                      <span style={{ textDecoration: "line-through" }}>
                        ₹{pic.price}
                      </span>
                      <span style={{ color: "#FF3F6C" }}>
                        ({pic.discount}%)
                      </span>
                    </span>
                    <span>Product specification</span>
                    <span className="specs-tabs">
                      <span className="spec-tiles">
                        <span style={{ color: "gray" }}>Size</span>
                        <span>{pic.sizes[0]}</span>
                      </span>
                      <span className="spec-tiles">
                        <span style={{ color: "gray" }}>Fabric</span>
                        <span>{pic.specification.fabric}</span>
                      </span>
                      <span className="spec-tiles">
                        <span style={{ color: "gray" }}>Fit</span>
                        <span>{pic.specification.fit}</span>
                      </span>
                    </span>
                    <span className="button-tab">
                      <button
                        style={{ backgroundColor: "#FF3F6C", color: "white" }}
                      >
                        <LocalMallIcon style={{ background: "transparent" }} />
                        <p style={{ background: "transparent" }}>Add To Bag</p>
                      </button>
                      <button
                        style={{ backgroundColor: "#FF3F6C", color: "white" }}
                      >
                        <FavoriteBorderIcon
                          style={{ background: "transparent" }}
                        />
                        <p style={{ background: "transparent" }}>
                          Add To WishList
                        </p>
                      </button>
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
