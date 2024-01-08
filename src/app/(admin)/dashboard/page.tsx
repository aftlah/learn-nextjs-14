// "use client"
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'

import React, { useEffect } from 'react'

const DashboardPage = () => {

  // yg di komen sudah tidak dipakai, kenapa?
  // karena kita sudah validasi di middleware

  // const router = useRouter()

  // // pengecekan Login dari NextAuth
  // const { data: session, status }: { data: any, status: string } = useSession()
  // console.log(session);

  // Kondisi untuk mengecek user sudah login atau belum
  // status = unauthenticated, maka di lempar ke login
  // useEffect(() => {
  //   if (status === 'unauthenticated') {
  //     router.push('/login')
  //   }else{
  //     // jika session tidak undefined dan role bukan admin
  //     if(session !== undefined && session.user.role !== 'admin') {
  //     router.push('/login')
  //     }
  //   }
  // }, [router, session, session?.user.role, status])

  return (
    <div className='w-full h-96 bg-gray-400 rounded-[12px] flex justify-center items-center'>
      <h1>Dashboard</h1>
    </div>
  )
}

export default DashboardPage