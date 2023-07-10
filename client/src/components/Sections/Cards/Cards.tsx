import React from 'react'
import CardE from '../../Elements/Card/CardE'
import './Cards.scss'

const Cards = (): JSX.Element => {
  return (
    <div className="cards-section">
      <CardE />
      <CardE />
      <CardE />
    </div>
  )
}

export default Cards
