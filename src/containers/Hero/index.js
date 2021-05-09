import React, {memo, useEffect, useRef, useLayoutEffect} from "react";
import gsap from "gsap";
import "./index.scss";

import Device from "../../assets/img/devices/phone.png";
import Device2x from "../../assets/img/devices/phone@2x.png";
import Dudes from "../Dudes";

const Hero = () => {
    const figureRef = useRef();
    const titleRef = useRef();
    const subTitleRef = useRef();

    useLayoutEffect(() => {
        gsap.set([subTitleRef.current, titleRef.current, figureRef.current], {opacity: 0})
    }, [])

    useEffect(() => {
        gsap.fromTo(figureRef.current, {
            transform: "translateY(80px) scale(0.5)",
            opacity: 0,
        }, {
            transform: "translateY(0) scale(01)",
            opacity: 1,
            duration: 1.7,
            ease: "expo.out"
        });
        gsap.fromTo([subTitleRef.current, titleRef.current], {
            transform: "translateY(-60px)",
            opacity: 0,
        }, {
            transform: "translateY(0)",
            opacity: 1,
            duration: 3,
            stagger: 0.15,
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

            <Dudes/>
        </section>
    );
};

export default memo(Hero);
