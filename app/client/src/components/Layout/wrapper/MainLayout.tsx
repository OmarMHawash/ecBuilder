import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderB from '../../Sections/EcBuilder/Header/HeaderB'
import FooterB from '../../Sections/EcBuilder/Footer/FooterB'

const HomeLayout = (): JSX.Element => {
  return (
    <div className="layout prim">
      <HeaderB />
      <main className="app-main">
        <Outlet />
      </main>
      <FooterB />
    </div>
  )
}

export default HomeLayout
