import React, { memo } from 'react'
import './index.scss'

const Button = ({ onClick, text, isDisabled }) => {
    
    return (
        <button className='enc-btn' onClick={onClick} disabled={isDisabled}>{text}</button>
    )
}

export default memo(Button)