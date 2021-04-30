import React, {memo} from 'react'
import './index.scss'

import {ReactComponent as LogoFull} from '../../assets/svg/logo-full.svg'
import Badge from "../Badge";

const Logo = () => {

    return (
        <div className='enc-logo'>
            <LogoFull/>
            <div className='enc-logo__badge'>
                <Badge text='Beta'/>
            </div>
        </div>
    )
}

export default memo(Logo)