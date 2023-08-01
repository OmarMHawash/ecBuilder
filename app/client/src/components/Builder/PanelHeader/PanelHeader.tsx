import React from 'react'
import './PanelHeader.scss'

import { useNavigate } from 'react-router-dom'
const PanelHeader = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className="panel-header">
      <div className="text-content">
        <h4>Quick Start</h4>
      </div>
      <div
        onClick={() => {
          navigate('/dashboard/profile')
        }}
        className="user-content"
      >
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          alt="profile-pic"
        />
        <h5>Demo user</h5>
      </div>
    </div>
  )
}

export default PanelHeader
