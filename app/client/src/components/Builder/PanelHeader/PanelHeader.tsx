import React from 'react'
import './PanelHeader.scss'

import { useNavigate } from 'react-router-dom'
const PanelHeader = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className="panel-header">
      <div className="text-content">
        <h1>Dashboard</h1>
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
        <h3>Demo user</h3>
      </div>
    </div>
  )
}

export default PanelHeader
