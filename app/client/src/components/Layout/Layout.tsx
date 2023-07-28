import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import '../../App.scss'

const Layout = (): JSX.Element => {
  // const [userData, setUserData] = useState({
  //   name: 'John Doe',
  // })
  // const uData = {
  //   user: userData,
  //   setUser: (usrName: any) => {
  //     setUserData({ name: usrName })
  //   },
  //   getUser: (): object => {
  //     return userData
  //   },
  // }
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
