import React from 'react'
import CardE from '../../Elements/CardE'
import { cardsData } from '../../../utils/newProject'
import './Cards.scss'

const Cards = (): JSX.Element => {
  return (
    <div className="cards-section">
      {cardsData.map((item, i) => (
        <CardE
          key={i}
          title={item.title}
          desc={item.description}
          content={item.img}
          href={item.href}
          footer={item.footer}
        />
      ))}
    </div>
  )
}

export default Cards
