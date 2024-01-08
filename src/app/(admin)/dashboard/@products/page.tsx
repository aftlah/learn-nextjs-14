'use client'

import React, { useState } from 'react'

const AdminProductPage = () => {
    const [status, setStatus] = useState("")

    const revalidate = async () => {
        const res = await fetch(`http://localhost:3000/api/revalidate?tag=product&secret=Altaf123`, {
            method: 'POST',
        })

        if (!res.ok) {
            // setStatus("Revalidate Failed")
        } else {
            const response = await res.json()
            if (response.revalidate) {
                setStatus("Revalidate Succes")
            }
            // console.log(response);

        }




    }

    return (
        <div className='w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center'>
            <h1>{status}</h1>
            {/* contoh Triger On-demand Revalidation menggunakan button*/}
            <button onClick={revalidate} className='bg-blue-700 text-white m-3 p-2 rounded-md'>Revalidate</button>
        </div>
    )
}

export default AdminProductPage