import React, { forwardRef, memo, useEffect, useState } from "react";
import Popper from "../../components/Popper";

const PopperDude = forwardRef(
  ({ src, srcSet, popper, i }, ref) => {
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
        className={`enc-dudes-${i + 1}`}
      >
        <img src={src} srcSet={srcSet} alt="" />

          {isPopperVisible && (
              <Popper position={popper.position}>
                  <img src={popper.tooltip.x1} srcSet={`${popper.tooltip.x2} 2x`} alt='' />
              </Popper>
          )}
      </div>
    );
  }
);

export default memo(PopperDude);
