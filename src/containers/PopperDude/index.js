import React, {forwardRef, memo, useEffect, useRef, useState} from "react";
import Popper from "../../components/Popper";
import ScrollTrigger from "gsap/ScrollTrigger";

const PopperDude = forwardRef(({ src, srcSet, popper, i }, ref) => {
  const [isPopperVisible, setIsPopperVisible] = useState(false);
  const firstLoad = useRef(true)

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 900px)": function () {
        if(firstLoad.current) {
          setTimeout(() => {
            setIsPopperVisible(true);
            firstLoad.current = false
          }, 2600);
        } else {
          setIsPopperVisible(true);
        }
      },
      "(max-width: 900px)": function() {
        setIsPopperVisible(false)
      }
    });
  }, []);

  return (
    <div
      ref={(el) => {
        ref.current[i] = el;
      }}
      className={`enc-dudes-${i}`}
    >
      <img src={src} srcSet={srcSet} alt="" />

      {isPopperVisible && (
        <Popper position={popper.position}>
          <img
            src={popper.tooltip.x1}
            srcSet={`${popper.tooltip.x2} 2x`}
            alt=""
          />
        </Popper>
      )}
    </div>
  );
});

export default memo(PopperDude);
