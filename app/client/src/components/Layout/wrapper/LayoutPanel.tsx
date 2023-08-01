import React from 'react'
import { Outlet } from 'react-router-dom'
import PanelHeader from '../../Builder/PanelHeader/PanelHeader'

import './LayoutPanel.scss'

const LayoutPanel = (): JSX.Element => {
  return (
    <div id="dashboard">
      <div className="main-content">
        <PanelHeader />
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPanel
