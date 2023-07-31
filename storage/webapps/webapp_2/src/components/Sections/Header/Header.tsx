import React from 'react'
import { Button } from '../../Elements/ButtonE'
import { headerData, metaData } from '../../../utils/newProject'
import NavMenu from './NavMenu'
import './Header.scss'

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo-nav">
          <div className="header-logo">
            <a href="/">
              <img src={metaData.logo} alt="logo" />
            </a>
          </div>
          <div className="header-nav">
            <NavMenu />
          </div>
        </div>
        <div className="header-action">
          <a href={headerData.action_nav[0].href}>
            <Button variant="outline">{headerData.action_nav[0].name}</Button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
