import React from 'react'
import Footer from './Footer.js'
import Header from './Header.js'

 const Layout = ({children}) => {
  return (
      <>
          <Header/>  
          <div>{children}</div>
          <Footer/>
      </>
  )
}
export default Layout;

