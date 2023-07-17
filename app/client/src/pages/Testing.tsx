import React from 'react'
import Header from '../components/Layout/Header/Header'
import CenterAction from '../components/Home/CenterAction/CenterAction'
import UpdateStyles from '../components/Home/UpdateStyles/UpdateStyles'

const Testing = (): JSX.Element => {
  return (
    <div className="test-button">
      <Header />
      <CenterAction name="Get Data" />
      <UpdateStyles />
    </div>
  )
}

export default Testing
