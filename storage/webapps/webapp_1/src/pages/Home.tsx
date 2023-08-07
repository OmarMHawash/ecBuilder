import React from 'react'
import HeaderA from '../components/Sections/HeaderA/HeaderA';
import Hero from '../components/Sections/Hero/Hero';
import Cards from '../components/Sections/Cards/Cards';
import Accordions from '../components/Sections/Accordions/Accordions';
import FooterB from '../components/Sections/FooterB/FooterB';

const Home = (): JSX.Element => {
  return <div id="app">
    
<HeaderA />
<Hero />
<Cards />
<Accordions />
<FooterB />
  </div>
}

export default Home
