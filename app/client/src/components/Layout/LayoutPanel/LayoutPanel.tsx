import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import PanelHeader from '../PanelHeader/PanelHeader'
import { Toaster } from '../../ui/toaster'

import './LayoutPanel.scss'

const LayoutPanel = (): JSX.Element => {
  const navigate = useNavigate()
  const logout = (): void => {
    navigate('/')
  }
  return (
    <div id="dashboard">
      <div className="action-panel">
        <div className="upper-panel">
          <div className="action-header">
            <Link
              to="/"
              className="ml-4 toggleColour text-white no-underline hover:no-underline font-bold text-lg lg:text-2xl"
            >
              Home
            </Link>
          </div>
          <div className="panel-list">
            <ul>
              <li>
                <Link className="p-item" to="/quick-start">
                  <h3>💡 Projects</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="panel-bottom">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="main-content">
        <PanelHeader />
        <Outlet />
        <Toaster />
      </div>
    </div>
  )
}

export default LayoutPanel
