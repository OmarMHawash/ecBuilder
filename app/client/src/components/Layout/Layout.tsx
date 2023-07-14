import React from 'react'
import { Outlet } from 'react-router-dom'

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
      <Outlet />
    </div>
  )
}

export default Layout
