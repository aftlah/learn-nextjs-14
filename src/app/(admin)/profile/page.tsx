"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const ProgfilePage = () => {

  const { data: session, status }: { data: any, status: string } = useSession()

  return (
    <div>
        <h1>Profile Page</h1>
        <h2>{session?.user?.name}</h2>
    </div>

  )
}

export default ProgfilePage