import React, { useState } from 'react'
import Header from '../components/Sections/Header/Header'
import Footer from '../components/Sections/Footer/Footer'
import UpdateStyles from '../components/Home/UpdateStyles/UpdateStyles'

export const Builder = (): JSX.Element => {
  const [float, setFloat] = useState('float-l')
  const [visi, setVisi] = useState('')
  return (
    <div id="builder-section">
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
      <div className="builder-content">
        <Header />
        <main></main>
        <Footer />
      </div>
      <div className={`${visi}`}>
        <UpdateStyles />
      </div>
    </div>
  )
}
