'use client'
import React, { useState } from "react"

const Template = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState(0)
    return (
        // perbedaan template dan layout
        // kalau layout dia akan membawa semua state yang ada
        // kalau template dia akan melakukan new ensens, jadi dia mereset semuanya
        <div>
            {/* <h1>dari Template : {state}</h1> */}
            {/* <button onClick={() => setState(state + 1)}>Click</button> */}
            {children}
        </div>
    )
}

export default Template