import React, {memo, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import "./index.scss";

import Device from "../../assets/img/devices/phone.png";
import Device2x from "../../assets/img/devices/phone@2x.png";
import Dudes from "../Dudes";

const Hero = () => {
  const figureRef = useRef();
  const titleRef = useRef();
  const subTitleRef = useRef();
  const [areDudesVisible, setAreDudesVisible] = useState(false)

  useEffect(() => {
    gsap.from(figureRef.current, {
      transform: "translateY(80px) scale(0.5)",
      opacity: 0,
      duration: 1.7,
      ease: "expo.out",
      onComplete() {
        setAreDudesVisible(true)
      }
    });
    gsap.from([subTitleRef.current, titleRef.current], {
      transform: "translateY(-60px)",
      opacity: 0,
      duration: 3,
      stagger: 0.17,
      ease: "expo.out",
    });
  }, []);

  return (
    <section className="enc-hero">
      <div>
        <h1 ref={titleRef} className="enc-hero__title">
          App that will boost your activity
        </h1>
        <div ref={subTitleRef} className="enc-hero__subtitle">
          Walk, conquer, and compete with others
        </div>
      </div>

      <img
        ref={figureRef}
        className="enc-hero__figure"
        src={Device}
        srcSet={Device2x}
        alt=""
      />

      {areDudesVisible && <Dudes />}
    </section>
  );
};

export default memo(Hero);
