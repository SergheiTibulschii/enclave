import React, { memo } from 'react'
import './index.scss'

const Badge = ({ text }) => {
    
    return <div className='enc-badge'>{text}</div>;
}

export default memo(Badge)