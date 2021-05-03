import React, { forwardRef, memo, useEffect, useState } from "react";
import Popper from "../../components/Popper";

const PopperDude = forwardRef(
  ({ position, src, srcSet, i }, ref) => {
      const [isPopperVisible, setIsPopperVisible] = useState(false)
      useEffect(() => {
          setTimeout(() => {
              setIsPopperVisible(true)
          }, 2600)
      }, [])

    return (
      <div
        ref={(el) => {
          ref.current[i + 1] = el;
        }}
        className={`enc-hero__dudes-${i + 1}`}
      >
        <img src={src} srcSet={srcSet} alt="" />

          {isPopperVisible && <Popper position={position}></Popper>}
      </div>
    );
  }
);

export default memo(PopperDude);
