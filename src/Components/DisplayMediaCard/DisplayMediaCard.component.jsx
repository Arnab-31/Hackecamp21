import React from 'react'
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const DisplayMediaCard = ({id,url, title}) => {
    return (
      <Element className={id}>
        <div className="post-card">
          <img
            src={url}
            alt="img"
            className="post-pic"
            
          />
          <span style={{ background: "transparent" }}>By: {title}</span>
        </div>
      </Element>
    );
}

export default DisplayMediaCard
