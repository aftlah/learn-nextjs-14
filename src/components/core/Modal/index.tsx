'use client'
import { useRouter } from 'next/navigation'
import React, { MouseEventHandler, ReactNode, useRef } from 'react'

const Modal = ({ children }: { children: ReactNode }) => {
    const overlay = useRef(null)
    const route = useRouter()

    // jika click diluar modal makan modal akan ter close
    const close: MouseEventHandler = (e) => {
        if (e.target === overlay.current)
            route.back()
    }
    return (
        <div ref={overlay} onClick={close} className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
                {children}
            </div>
        </div>
    )
}

export default Modal