import React from 'react'
import Cards from '../components/Sections/Cards/Cards'
import Accordions from '../components/Sections/Accordions/Accordions'
import HeaderA from '../components/Sections/Header/HeaderA'
import FooterA from '../components/Sections/Footer/FooterA'
import Hero from '../components/Sections/Hero/Hero'
import Tabbed from '../components/Sections/Tabbed/Tabbed'

const Components = (): JSX.Element => {
  document.title = 'Demo - Components'
  return (
    <div>
      <HeaderA />
      <Hero />
      <Cards />
      <Tabbed />
      <Accordions />
      <FooterA />
    </div>
  )
}

export default Components
