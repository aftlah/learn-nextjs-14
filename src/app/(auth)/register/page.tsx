"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RegisterPage = () => {
  const { push } = useRouter()
  const [error, setError] = useState<string>("")
  const [isLoading, setIsloading] = useState<boolean>(false)



  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError("")
    setIsloading(true)
    
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        fullname: e.target.fullname.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      })
    })

    // jika statu 200 / login berhasil
    if (res.status == 200) {
      // reset input
      e.target.reset()
      push("/login")
      setIsloading(false)
    } else {
      setError("Email already exist")
      setIsloading(false)
      // console.log(res);
    }
  }

  return (
    <section className="grid min-h-screen place-items-center  p-16">
      <div className="w-72 rounded-md bg-gray-100 p-4 pt-0 shadow-lg">
      
        {error !== "" && <div className='text-center text-red-500 font-bold py-2'>{error}</div> }
        <header className="flex h-16 items-center justify-between font-bold text-gray-950">
          <span>Register</span>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </header>
        <form className="grid gap-3" onSubmit={(e) => handleSubmit(e)}>
          <input required name='fullname' className="h-10 rounded-sm bg-gray-100/50 px-2 text-gray-950 placeholder:text-gray-600/80 focus:outline-none focus:ring focus:ring-gray-400" type="text" placeholder="Enter your Full Name" />
          <input required name='username' className="h-10 rounded-sm bg-gray-100/50 px-2 text-gray-950 placeholder:text-gray-600/80 focus:outline-none focus:ring focus:ring-gray-400" type="text" placeholder="Enter your User Name" />
          <input required name='email' className="h-10 rounded-sm bg-gray-100/50 px-2 text-gray-950 placeholder:text-gray-600/80 focus:outline-none focus:ring focus:ring-gray-400" type="email" placeholder="Enter your Email" />
          <input required name='password' className="h-10 rounded-sm bg-gray-100/50 px-2 text-gray-950 placeholder:text-gray-600/80 focus:outline-none focus:ring focus:ring-gray-400" type="password" placeholder="Enter your Password" />
          <button disabled={isLoading} className="flex h-10 items-center justify-between rounded-sm bg-gray-700 px-2 text-gray-100 transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400" type="submit">
            {isLoading ? <span>Loading...</span> : <span>Sign Up</span>}
            {/* <span>Sign Up</span> */}
            <span>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </form>
        <div className='flex justify-center mt-4 text-sm'>
          Have registered?
          <Link href="/login" className='ml-1 text-blue-700 font-bold'>Sign In Here</Link>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage