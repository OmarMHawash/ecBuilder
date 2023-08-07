import React from 'react'
import HeaderB from '../components/Sections/HeaderB/HeaderB';
import Hero from '../components/Sections/Hero/Hero';
import Accordions from '../components/Sections/Accordions/Accordions';
import FooterA from '../components/Sections/FooterA/FooterA';

const Home = (): JSX.Element => {
  return <div id="app">
    
<HeaderB />
<Hero />
<Accordions />
<FooterA />
  </div>
}

export default Home
