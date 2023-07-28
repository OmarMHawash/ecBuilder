import React from 'react'
import { Button } from '../../Elements/ButtonE'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = (): JSX.Element => {
  return (
    <header className="app-header">
      <div className="header-wrapper">
        <Link to="/">
          <div className="logo-name">
            <div className="img-wrapper">🧱</div>
            <h4>ecBuilder</h4>
          </div>
        </Link>
        <div className="nav-section">
          <Link to="/features">
            <h5>Features</h5>
          </Link>
          <Link to="/demo" target="_blank">
            <h5>Demo</h5>
          </Link>
          <Link to="/quick-start">
            <Button variant="default">Quick Start</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
