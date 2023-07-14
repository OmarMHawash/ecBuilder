import React from 'react'
import Cards from '../components/Sections/Cards/Cards'
import AccordionE from '../components/Elements/AccordionE'
import { Button } from '../components/Elements/ButtonE'

const All = (): JSX.Element => {
  return (
    <div>
      <Cards />
      <AccordionE />
      <Button variant="outline">Hello</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}

export default All
