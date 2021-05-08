import React, {memo, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./index.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import ThankImg from '../../assets/img/thank.png'
import ThankImgx2 from '../../assets/img/thank@2x.png'

const Form = () => {
    const sectionRef = useRef();
    const contentRef = useRef();
    const titleRef = useRef();
    const controlsRef = useRef();
    const thankImgRef = useRef();
    const thankTitleRef = useRef();
    const thankSubtitleRef = useRef();
    const thankContainer = useRef();
    const [inputText, setInputText] = useState("");
    const tl = useRef(gsap.timeline({paused: true}))

    useEffect(() => {
        tl.current.from([titleRef.current, controlsRef.current], {
            y: 120,
            opacity: 0,
            duration: 1.3,
            stagger: 0.15,
            ease: 'expo.out',
        }, 'appear');

        tl.current.to([titleRef.current, controlsRef.current], {
            y: -120,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power1.out',
        }, 'disappear');

        tl.current.to(thankContainer.current, {
            opacity: 1,
            duration: 1
        }, '<')
        tl.current.addLabel('thank-img')
        tl.current.fromTo(thankImgRef.current, {
            transform: 'rotate(15deg)',
        }, {
            transform: 'rotate(0)',
            duration: 4,
            ease: 'elastic.out(1.75,0.4)'
        }, '<')
        tl.current.from([thankTitleRef.current, thankSubtitleRef.current], {
            y: 60,
            duration: 2,
            stagger: 0.1,
            ease: 'expo.out'
        }, '<');

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top center',
            onEnter: () => {
                if (tl.current.currentLabel() === 'appear') {
                    tl.current.tweenFromTo('appear', 'disappear')
                }
            },
        })
    }, []);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleClick = () => {
        tl.current.play('disappear')
    }

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
                    <Button onClick={handleClick} isDisabled={!Boolean(inputText)} text="Request" />
                  </div>
                </div>

                <div ref={thankContainer} className='enc-form__thank'>
                    <img ref={thankImgRef} src={ThankImg} srcSet={`${ThankImgx2} 2x`} alt='Thank you!'/>
                    <h1 ref={thankTitleRef} className='enc-form__thank-title'>Thank you!</h1>
                    <div ref={thankSubtitleRef} className='enc-form__thank-subtitle'>Check your email</div>
                </div>
            </div>
        </section>
    );
};

export default memo(Form);
