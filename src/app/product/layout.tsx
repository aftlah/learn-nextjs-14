import React, { ReactNode } from 'react'

const Layout = ({ children, modal }: { children: ReactNode, modal: ReactNode }) => {
  return (
    <>
      {/* ini yg menggunakan modal box */}
      {modal}

      {/* ini yang tidak menggunakan modal box */}
      {children}
    </>
  )
}

export default Layout