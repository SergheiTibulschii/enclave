import React, {memo, useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./index.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ThankModal from "../Modals/ThankModal";

const Form = () => {
    const sectionRef = useRef();
    const contentRef = useRef();
    const titleRef = useRef();
    const controlsRef = useRef();
    const [inputText, setInputText] = useState("");
    const tl = useRef(gsap.timeline({paused: true}))
    const [isModalVisible, setIsModalVisible] = useState(false)

    useLayoutEffect(() => {
        gsap.set([titleRef.current, controlsRef.current], {opacity: 0})
    }, [])

    useEffect(() => {
        tl.current.fromTo([titleRef.current, controlsRef.current], {
            y: 120,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
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
        setIsModalVisible(true)
        setInputText('')
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
                        <Button onClick={handleClick} isDisabled={!Boolean(inputText)} text="Request"/>
                    </div>
                </div>

                {
                    isModalVisible && (
                        <Modal close={() => setIsModalVisible(false)}>
                            <ThankModal/>
                        </Modal>
                    )
                }
            </div>
        </section>
    );
};

export default memo(Form);
