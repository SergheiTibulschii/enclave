import React, { memo, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./index.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Form = () => {
  const sectionRef = useRef();
  const contentRef = useRef();
  const titleRef = useRef();
  const controlsRef = useRef();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const trigger = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center'
      },
    });

    trigger.from([titleRef.current, controlsRef.current], {
      y: 120,
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: 'expo.out'
    });
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <section ref={sectionRef} className="enc-form">
      <div ref={contentRef} className="enc-form__content">
        <div className="enc-form__body">
          <h1 ref={titleRef} className="enc-form__title">
            Request and be one of the first to test the app
          </h1>
          <div ref={controlsRef} className="enc-form__controls">
            <Input
              value={inputText}
              onChange={handleInputChange}
              placeholder="Email here"
            />
            <Button isDisabled={!Boolean(inputText)} text="Request" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Form);
