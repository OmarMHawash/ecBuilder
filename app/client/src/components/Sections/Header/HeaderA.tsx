import React, { useContext, useState } from 'react'
import { Button } from '../../Elements/ButtonE'
import { userContext } from '../../../contexts/userContext'
import { headerData } from '../../../utils/newProject'
import NavMenu from './NavMenu'
import { Link } from 'react-router-dom'
import './Header.scss'

const HeaderA = (): JSX.Element => {
  // const [user, setUser] = useState(useContext(userContext))
  // console.log('HeaderA ~ user:', user)
  return (
    <header className="header-a prim">
      <div className="header-wrapper">
        <div className="header-logo-nav">
          <div className="header-logo">
            <Link to="/">{/* <img src={metaData.logo} alt="logo" /> */}</Link>
          </div>
          <div className="header-nav">
            <NavMenu />
          </div>
        </div>
        <div className="header-action">
          <Link to={headerData.action_nav[0].href}>
            <Button variant="outline">{headerData.action_nav[0].name}</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderA
