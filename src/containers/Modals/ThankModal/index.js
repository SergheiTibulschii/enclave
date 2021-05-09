import React, {memo, useEffect, useRef} from 'react'
import gsap from 'gsap'
import './index.scss'
import ThankImg from "../../../assets/img/thank.png";
import ThankImgx2 from "../../../assets/img/thank@2x.png";

const ThankModal = () => {
    const thankImgRef = useRef();
    const thankTitleRef = useRef();
    const thankSubtitleRef = useRef();
    const thankContainer = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(thankContainer.current, {
            opacity: 1,
            duration: 1
        }, '<')
        tl.addLabel('thank-img')
        tl.fromTo(thankImgRef.current, {
            transform: 'rotate(15deg)',
        }, {
            transform: 'rotate(0)',
            duration: 4,
            ease: 'elastic.out(1.75,0.4)'
        }, '<')
        tl.from([thankTitleRef.current, thankSubtitleRef.current], {
            y: 60,
            duration: 2,
            stagger: 0.1,
            ease: 'expo.out'
        }, '<');
    }, [])

    return (
        <div ref={thankContainer} className='enc-thank'>
            <img ref={thankImgRef} src={ThankImg} srcSet={`${ThankImgx2} 2x`} alt='Thank you!'/>
            <h1 ref={thankTitleRef} className='enc-thank__title'>Thank you!</h1>
            <div ref={thankSubtitleRef} className='enc-thank__subtitle'>Check your email</div>
        </div>
    )
}

export default memo(ThankModal)
