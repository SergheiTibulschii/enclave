import React, { memo, useEffect, useRef } from "react";
import "./index.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import PopperDude from "../PopperDude";
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
import Tooltip1 from "../../assets/img/tooltips/tooltip-1.png";
import Tooltip1x2 from "../../assets/img/tooltips/tooltip-1@2x.png";
import Tooltip2 from "../../assets/img/tooltips/tooltip-2.png";
import Tooltip2x2 from "../../assets/img/tooltips/tooltip-2@2x.png";
import { randomInteger } from "../../components/utils/randomInteger";

const imgs = [
  { x1: Img1, x2: Img1x2, side: "left" },
  { x1: Img2, x2: Img2x2, side: "right" },
  { x1: Img3, x2: Img3x2, side: "left" },
  {
    x1: Img4,
    x2: Img4x2,
    side: "right",
    popper: { position: "bottom", tooltip: { x1: Tooltip1, x2: Tooltip1x2 } },
  },
  { x1: Img6, x2: Img6x2, side: "right" },
  {
    x1: Img8,
    x2: Img8x2,
    side: "left",
    popper: { position: "top", tooltip: { x1: Tooltip2, x2: Tooltip2x2 } },
  },
];
const staggerOrder = [1, 3, 5, 2, 4, 6];
const Dudes = () => {
  const ref = useRef({});
  const dudesRef = useRef();

  useEffect(() => {
    const elements = staggerOrder.map((v) => ref.current[v]);

    const parallaxTl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "back.out(4)",
      },
    });
    parallaxTl.fromTo(
      elements,
      {
        transform: "scale(0)",
        opacity: 0,
      },
      {
        transform: "scale(1)",
        opacity: 1,
        duration: 1.5,
        stagger: 0.15,
        ease: "back.out(1.4)",
        delay: 0.8,
      },
      0
    );

    ScrollTrigger.matchMedia({
      "(min-width: 900px)": function () {
        elements
          .map((el) => {
            return {
              y: randomInteger(100, 250),
              el,
            };
          })
          .forEach(({ y, el }, i) => {
            parallaxTl.fromTo(
              el,
              {
                y: 0,
              },
              {
                scrollTrigger: {
                  scrub: 1,
                  end: "+=5000",
                },
                y: y,
                duration: 3,
              },
              0
            );
          });
      },
      "(max-width: 900px)": function() {
        elements
            .map((el) => {
              return {
                y: 150,
                el,
              };
            })
            .forEach(({ y, el }, i) => {
              parallaxTl.fromTo(
                  el,
                  {
                    y: 0,
                  },
                  {
                    scrollTrigger: {
                      scrub: 1,
                      end: "+=5000",
                    },
                    y: y,
                    duration: 3,
                  },
                  0
              );
            });
      }
    });

    parallaxTl.play();
  }, []);

  return (
    <div ref={dudesRef} className="enc-dudes">
      <div className="enc-dudes__left">
        {imgs
          .filter(({ side }) => side === "left")
          .map(({ x1, x2, popper }, i) => {
            return popper ? (
              <PopperDude
                popper={popper}
                src={x1}
                srcSet={`${x2} 2x`}
                ref={ref}
                key={x1}
                i={i + 1}
              />
            ) : (
              <img
                key={x1}
                className={`enc-dudes-${i + 1}`}
                ref={(el) => (ref.current[i + 1] = el)}
                src={x1}
                srcSet={`${x2} 2x`}
                alt=""
              />
            );
          })}
      </div>
      <div className="enc-dudes__right">
        {imgs
          .filter(({ side }) => side === "right")
          .map(({ x1, x2, popper }, i) => {
            return popper ? (
              <PopperDude
                popper={popper}
                src={x1}
                srcSet={`${x2} 2x`}
                ref={ref}
                key={x1}
                i={i + 4}
              />
            ) : (
              <img
                key={x1}
                className={`enc-dudes-${i + 4}`}
                ref={(el) => (ref.current[i + 4] = el)}
                src={x1}
                srcSet={`${x2} 2x`}
                alt=""
              />
            );
          })}
      </div>
    </div>
  );
};

export default memo(Dudes);
