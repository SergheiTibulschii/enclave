import React, {memo, useEffect, useRef} from 'react'
import gsap from 'gsap'

import './index.scss'
import Logo from "../../components/Logo";
import Button from "../../components/Button";

const Navbar = () => {
    const navRef = useRef()

    useEffect(() => {
          gsap.from(navRef.current, {
              transform: "translateY(-80px)",
              opacity: 0,
              duration: 3,
              ease: "expo.out",
          })
    }, [])

    return (
        <div ref={navRef} className='enc-navbar'>
            <Logo />
            <Button text='Request the app' />
        </div>
    )
}

export default memo(Navbar)