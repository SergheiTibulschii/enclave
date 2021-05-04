import React, {memo, useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

import './index.scss'
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import {scrollbar} from "../../scroll";

const Navbar = () => {
    const logoRef = useRef()
    const btnRef = useRef()

    useEffect(() => {
          gsap.fromTo([logoRef.current, btnRef.current], {
              transform: "translateY(-80px)",
              opacity: 0
          }, {
              transform: "translateY(0)",
              opacity: 1,
              duration: 2.5,
              stagger: 0.2,
              ease: "expo.out",
          })

        ScrollTrigger.matchMedia({
            "(min-width: 440px)": function() {
                btnRef.current.innerText = 'Request the app'
            },
            "(max-width: 440px)": function() {
                btnRef.current.innerText = 'Request'
            }
        })
    }, [])

    const handleRequestClick = () => {
        scrollbar.scrollTo(0, 2000, 1000, { easing: function easeInOutSine(x) {
                return -(Math.cos(Math.PI * x) - 1) / 2;
            }})
    }

    return (
        <div className='enc-navbar'>
            <Logo ref={logoRef} />
            <Button onClick={handleRequestClick} ref={btnRef} />
        </div>
    )
}

export default memo(Navbar)
