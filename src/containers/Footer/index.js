import React, { memo } from 'react'
import './index.scss'

import NFImg from '../../assets/img/nf.png'
import NFImg2x from '../../assets/img/nf@2x.png'

const Footer = () => {

    return (
        <div className='enc-footer'>
            <img src={NFImg} srcSet={NFImg2x} alt='Naughty fox' />
            <span className='enc-footer__built-by'>Built by The Noughty Fox</span>
        </div>
    )
}

export default memo(Footer)
