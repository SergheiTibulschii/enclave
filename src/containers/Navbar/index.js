import React, { memo } from 'react'
import './index.scss'
import Logo from "../../components/Logo";
import Button from "../../components/Button";

const Navbar = () => {

    return (
        <div className='enc-navbar'>
            <Logo />
            <Button text='Request the app' />
        </div>
    )
}

export default memo(Navbar)