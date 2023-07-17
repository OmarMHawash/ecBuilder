import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const AccordionE = ({ question, answer }: AccordionEProps): JSX.Element => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="accordion">
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

interface AccordionEProps {
  question: string
  answer: string
}

export default AccordionE
