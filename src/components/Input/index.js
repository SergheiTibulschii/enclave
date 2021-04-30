import React, { memo } from 'react'
import './index.scss'

const Input = ({ ...props}) => {

    return (
        <input className='enc-input' type="text" {...props} />
    )
}

export default memo(Input)