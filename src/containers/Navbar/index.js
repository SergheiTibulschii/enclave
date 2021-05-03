import React, {memo, useEffect, useRef} from 'react'
import gsap from 'gsap'

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
    }, [])

    const handleRequestClick = () => {
        scrollbar.scrollIntoView(document.querySelector('.enc-form'))
    }

    return (
        <div className='enc-navbar'>
            <Logo ref={logoRef} />
            <Button onClick={handleRequestClick} ref={btnRef} text='Request the app' />
        </div>
    )
}

export default memo(Navbar)
