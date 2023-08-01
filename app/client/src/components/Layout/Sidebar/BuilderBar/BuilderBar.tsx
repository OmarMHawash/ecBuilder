import React, { useState } from 'react'
import UpdateStyles from '../../../Home/UpdateStyles/UpdateStyles'
import './BuilderBar.scss'

const BuilderBar = () => {
  const [float, setFloat] = useState('float-l')
  const [visi, setVisi] = useState('')
  return (
    <div className="builder-sidebar">
      <div className={`webapp-data ${float} ${visi}`}>
        <div className="webapp-data-wrapper"></div>
        <div
          className="floating-circle"
          onClick={() => {
            setFloat(float === 'float-l' ? 'float-r' : 'float-l')
          }}
        >
          ↪️
        </div>
      </div>
      <div
        className="floating-circle-2 floating-circle"
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
