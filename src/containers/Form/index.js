import React, {memo, useState} from 'react'
import './index.scss'

import Input from "../../components/Input";
import Button from "../../components/Button";

const Form = () => {
    const [inputText, setInputText] = useState('')

    const handleInputChange = event => {
        setInputText(event.target.value)
    }

    return (
        <section className='enc-form'>
            <div className='enc-form__body'>
                <h1 className='enc-form__title'>Request and be one of the first to test the app</h1>
                <div className='enc-form__controls'>
                    <Input value={inputText} onChange={handleInputChange} placeholder='Email here' />
                    <Button isDisabled={!Boolean(inputText)} text='Request' />
                </div>
            </div>
        </section>
    )
}

export default memo(Form)