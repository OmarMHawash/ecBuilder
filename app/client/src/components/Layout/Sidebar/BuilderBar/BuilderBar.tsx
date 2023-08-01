import React, { useState } from 'react'
import UpdateStyles from '../../../Home/UpdateStyles/UpdateStyles'
import { Link } from 'react-router-dom'
import './BuilderBar.scss'
import TabbedBar from '../../../Builder/TabbedBar/TabbedBar'

const BuilderBar = () => {
  const [float, setFloat] = useState('float-l')
  const [visi, setVisi] = useState('')
  return (
    <div className="builder-sidebar">
      <div className={`webapp-data ${float} ${visi}`}>
        <div className="webapp-data-wrapper">
          <TabbedBar />
        </div>
        <div
          className="floating-circle fc-1"
          onClick={() => {
            setFloat(float === 'float-l' ? 'float-r' : 'float-l')
          }}
        >
          ↪️
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
