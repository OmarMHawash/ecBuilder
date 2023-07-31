import React from 'react'
import AccordionE from '../../Elements/AccordionE'
import { FAQData } from '../../../utils/newProject'
import './Accordions.scss'

const Accordions = (): JSX.Element => {
  return (
    <div className="accordions">
      {FAQData.map((item) => (
        <AccordionE
          key={item.question.toString()}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  )
}

export default Accordions
