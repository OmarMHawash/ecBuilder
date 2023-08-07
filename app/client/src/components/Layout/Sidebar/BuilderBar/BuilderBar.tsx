import React, { useContext, useState } from 'react'
import UpdateStyles from '../../../Home/UpdateStyles/UpdateStyles'
import { Link } from 'react-router-dom'
import './BuilderBar.scss'
import TabbedBar from '../../../Builder/TabbedBar/TabbedBar'
import { userContext } from '../../../../contexts/userContext'

const BuilderBar = () => {
  const [visi, setVisi] = useState('')
  const { user } = useContext(userContext)
  return (
    <div className="builder-sidebar">
      <div className={`webapp-data float-l ${visi}`}>
        <div className="webapp-data-wrapper">
          <h3>
            Project: <b>{user.metaData.title}</b>
          </h3>
          <TabbedBar />
        </div>
        <div className="builder-header">
          <Link to="/">
            <h4>🧱</h4>
          </Link>
          <Link to="/quick-start">
            <h4>🏗</h4>
          </Link>
        </div>
      </div>
      <div
        className="floating-circle fc-2"
        onClick={() => {
          setVisi(visi === '' ? 'hide' : '')
        }}
      >
        ↩
      </div>
      <div className={`${visi}`}>
        <UpdateStyles />
      </div>
    </div>
  )
}

export default BuilderBar
