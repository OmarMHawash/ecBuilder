import React from 'react'
import Header from '../components/Header/Header'
import CenterAction from '../components/Home/CenterAction/CenterAction'
import Cards from '../components/Sections/Cards/Cards'
import UpdateStyles from '../components/Home/UpdateStyles/UpdateStyles'

const Testing = (): JSX.Element => {
  return (
    <div className="test-button">
      <Header />
      <CenterAction name="Get Data" />
      <Cards />
      <UpdateStyles />
    </div>
  )
}

export default Testing
