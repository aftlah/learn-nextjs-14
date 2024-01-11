import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center min-h-screen justify-center'>
        <h1 className='text-9xl'>404</h1>
        <h2 className='mb-5 text-xl'>Page Not Found</h2>
        <Link href={"/"} className='bg-blue-700  text-white p-3'>Back to Home</Link>
    </div>
  )
}

export default NotFound