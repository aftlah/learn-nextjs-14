"use client"

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react"



// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets:['latin'],
  weight: ['100','200','300','400', '500', '600', '700','800','900'],
})



const disableNavbar = ['/login', '/register']

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(0)
  const pathname = usePathname()
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>
        {/* SessionProvider untuk membungkus semua page dengan NextAuth*/}
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {/* <Navbar /> */}
          {/* <h1>dariLayout : {state}</h1> */}
          {/* <button onClick={() => setState(state + 1)}>Click</button> */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
