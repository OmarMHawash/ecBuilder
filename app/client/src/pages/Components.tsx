import React from 'react'
import Cards from '../components/Sections/Cards/Cards'
import Accordions from '../components/Sections/Accordions/Accordions'
import Header from '../components/Sections/Header/Header'
import Footer from '../components/Sections/Footer/Footer'
import Hero from '../components/Sections/Hero/Hero'
import Tabbed from '../components/Sections/Tabbed/Tabbed'

const Components = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Tabbed />
      <Accordions />
      <Footer />
    </div>
  )
}

export default Components
