import React, { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.scss";

import Img1 from "../../assets/dudes/1.png";
import Img1x2 from "../../assets/dudes/1@2x.png";
import Img2 from "../../assets/dudes/2.png";
import Img2x2 from "../../assets/dudes/2@2x.png";
import Img3 from "../../assets/dudes/3.png";
import Img3x2 from "../../assets/dudes/3@2x.png";
import Img4 from "../../assets/dudes/4.png";
import Img4x2 from "../../assets/dudes/4@2x.png";
import Img6 from "../../assets/dudes/6.png";
import Img6x2 from "../../assets/dudes/6@2x.png";
import Img8 from "../../assets/dudes/8.png";
import Img8x2 from "../../assets/dudes/8@2x.png";
import Device from "../../assets/img/devices/phone.png";
import Device2x from "../../assets/img/devices/phone@2x.png";

const staggerOrder = [1, 3, 5, 2, 4, 6];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const Hero = () => {
  const ref = useRef({});
  const figureRef = useRef();
  const titleRef = useRef();
  const dudesRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const elements = staggerOrder.map((v) => ref.current[v]);

    const parallaxTl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "back.out(4)",
      },
    });

    parallaxTl.from(
      elements,
      {
        transform: "scale(0)",
        opacity: 0,
        duration: 2,
        stagger: 0.15,
        ease: "elastic.out(1, 0.75)",
      },
      0
    );

    elements
      .map((el) => {
        return {
          y: randomInteger(15, 50),
          x: randomInteger(5, 8) * (randomInteger(1, 2) === 1 ? -1 : 1),
          el,
        };
      })
      .forEach(({ y, x, d, el }, i) => {
        parallaxTl.fromTo(
          el,
          {
            y: 0,
            x: 0,
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              scrub: 1,
              start: "25% center",
            },
            y,
            x,
            duration: 0.4,
            ease: "back.out(4)",
          },
          0
        );
      });

    parallaxTl.play();

    gsap.from(figureRef.current, {
      transform: "translateY(80px) scale(0.5)",
      opacity: 0,
      duration: 2.5,
      ease: "expo.out",
    });
    gsap.from(titleRef.current, {
      transform: "translateY(-80px)",
      opacity: 0,
      duration: 3,
      ease: "expo.out",
    });
  }, []);

  const imgs = [
    { x1: Img1, x2: Img1x2 },
    { x1: Img2, x2: Img2x2 },
    { x1: Img3, x2: Img3x2 },
    { x1: Img4, x2: Img4x2 },
    { x1: Img6, x2: Img6x2 },
    { x1: Img8, x2: Img8x2 },
  ];
  return (
    <section ref={sectionRef} className="enc-hero">
      <div ref={titleRef}>
        <h1 className="enc-hero__title">App that will boost your activity</h1>
        <div className="enc-hero__subtitle">
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

      <div ref={dudesRef} className="enc-hero__dudes">
        {imgs.map(({ x1, x2 }, i) => (
          <img
            key={x1}
            className={`enc-hero__dudes-${i + 1}`}
            ref={(el) => (ref.current[i + 1] = el)}
            src={x1}
            srcSet={`${x2} 2x`}
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Hero);
