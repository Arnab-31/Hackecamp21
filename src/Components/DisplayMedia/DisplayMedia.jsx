import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import React, { useEffect } from "react";

const DisplayMedia = () => {
  const scrollTo = () => {
    scroller.scrollTo("test1", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  useEffect(() => {
    scrollTo();
  });
  return <div></div>;
};

export default DisplayMedia;
