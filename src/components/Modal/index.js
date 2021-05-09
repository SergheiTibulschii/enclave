import React, {memo, useEffect, useRef, useState} from 'react'
import './index.scss'
import gsap from 'gsap'
import {createPortal} from "react-dom";
import {scrollbar} from "../../scroll";

const Modal = ({close, children}) => {
    const modalRef = useRef()
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        scrollbar.updatePluginOptions('Disable', {
            disable: true
        })

        const t = setTimeout(() => {
            handleClose()
        }, 3000)

        return () => {
            scrollbar.updatePluginOptions('Disable', {
                disable: false
            });
            clearTimeout(t)
        }
    }, [])

    useEffect(() => {
        if (!isVisible) {
            gsap.to(modalRef.current, {
                opacity: 0,
                ease: 'expo.out'
            }).then(() => {
                close()
            })
        }
    }, [isVisible, close])

    const handleClose = () => {
        setIsVisible(false)
    }

    return createPortal(
        (
            <div ref={modalRef} onClick={handleClose} className='enc-modal__wrapper'>
                <div className='env-modal__inner'>
                    {children}
                </div>
            </div>
        ),
        document.body
    )
}

export default memo(Modal)
