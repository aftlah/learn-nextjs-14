import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  // usePathname itu untuk mengambl path dari url
  const pathname = usePathname()

  // useRoter untuk memindahkan halaman page
  // const router = useRouter()

  // useSession dari NextAuth
  const { data: session, status }: { data: any, status: string } = useSession()
  console.log(session, status);


  return (
    <nav className='flex justify-between bg-gray-800 py-2 px-5'>
      <div className='flex items-center '>
        <h1 className='text-white'>Navbar</h1>
        <ul className='flex ml-5'>
          <Link href='/'>
            <li className={`mr-3 ${pathname === '/' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Home</li>
          </Link>
          <Link href="/about">
            <li className={`mr-3 ${pathname === '/about' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>About</li>
          </Link>
          <Link href="/about/profile">
            <li className={`mr-3 ${pathname === '/about/profile' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Profile</li>
          </Link>
        </ul>
      </div>
      <div>
        {/* Jika statusnya authenticated */}
        {status === 'authenticated' ? (
          <div className='flex items-center gap-2'>
            <Image src='/images/Profile-Avatar.png' width={40} height={40} alt='profile' className='w-8 h-8 rounded-full' />
            <h4 className='text-white mr-5'>{session?.user?.username}</h4>
            <button className='bg-white rounded-md px-3 text-sm h-7 cursor-pointer'
              // signOut ini methode dari NextAuth
              onClick={() => signOut()}>
              Logout
            </button>
          </div>
        ) : (
          <button className='bg-white rounded-md px-3 text-sm h-7 cursor-pointer'
            // signin ini methode dari NextAuth
            onClick={() => signIn()}>
            Login
          </button>
        )}

      </div>
    </nav>
  )
}

export default Navbar