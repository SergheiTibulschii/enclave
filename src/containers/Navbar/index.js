import React, {memo, useEffect, useRef} from 'react'
import gsap from 'gsap'

import './index.scss'
import Logo from "../../components/Logo";
import Button from "../../components/Button";

const Navbar = () => {
    const logoRef = useRef()
    const btnRef = useRef()

    useEffect(() => {
          gsap.from([logoRef.current, btnRef.current], {
              transform: "translateY(-80px)",
              opacity: 0,
              duration: 2.5,
              stagger: 0.2,
              ease: "expo.out",
          })
    }, [])

    return (
        <div className='enc-navbar'>
            <Logo ref={logoRef} />
            <Button ref={btnRef} text='Request the app' />
        </div>
    )
}

export default memo(Navbar)
