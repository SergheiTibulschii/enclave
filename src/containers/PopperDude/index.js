import React, { forwardRef, memo } from "react";
import Popper from "../../components/Popper";

const PopperDude = forwardRef(
  ({ position, src, srcSet, isPopperVisible, i }, ref) => {

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
