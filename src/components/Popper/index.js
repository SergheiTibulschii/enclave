import React, { useEffect, useState } from "react";
import "./index.scss";
import gsap from "gsap";

const Popper = ({ position = "top", children }) => {
  const [ref, setRef] = useState();

  useEffect(() => {
    if (ref) {
      gsap.fromTo(
        ref,
        {
          y: position === 'bottom' ? -20 : 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: 'expo.out'
        }
      );
    }
  }, [ref, position]);

  return (
    <div
      ref={setRef}
      className={`enc-popper ${position === "bottom" ? "--down" : "--up"}`}
    >
      <div
        className={`enc-popper-tit ${
          position === "bottom" ? "--up" : "--down"
        }`}
      ></div>
      {children}
    </div>
  );
};

export default Popper;
