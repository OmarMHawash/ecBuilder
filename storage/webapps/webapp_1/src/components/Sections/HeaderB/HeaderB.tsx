import React from 'react'
import { Button } from '../../Elements/ButtonE'
import { Link } from 'react-router-dom'
import './Header.scss'

const HeaderB = (): JSX.Element => {
  return (
    <header className="app-header">
      <div className="header-wrapper">
        <Link to="/">
          <div className="logo-name">
            <div className="img-wrapper">‍💻</div>
            <h4>Awesome</h4>
          </div>
        </Link>
        <div className="nav-section">
          <a href="#features">
            <h5>Features</h5>
          </a>
          <Link to="/" target="_blank">
            <h5>Demo</h5>
          </Link>
          <Link to="/">
            <Button variant="default">Quick Start</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderB
