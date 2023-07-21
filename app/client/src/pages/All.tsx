import React from 'react'
import Cards from '../components/Sections/Cards/Cards'
import Accordions from '../components/Sections/Accordions/Accordions'
import Header from '../components/Sections/Header/Header'
import Footer from '../components/Sections/Footer/Footer'
import Hero from '../components/Sections/Hero/Hero'
import Tabbed from '../components/Sections/Tabbed/Tabbed'
import UpdateStyles from '../components/Home/UpdateStyles/UpdateStyles'

const All = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Tabbed />
      <Accordions />
      <UpdateStyles />
      <Footer />
    </div>
  )
}

export default All
