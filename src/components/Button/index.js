import React, {forwardRef, memo} from 'react'
import './index.scss'

const Button = forwardRef(({ onClick, text, isDisabled }, ref) => {

    return (
        <button ref={ref} className='enc-btn' onClick={onClick} disabled={isDisabled}>{text}</button>
    )
})

export default memo(Button)
