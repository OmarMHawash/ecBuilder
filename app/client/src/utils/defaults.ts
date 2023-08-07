import Accordions from '../components/Sections/Accordions/Accordions'
import Cards from '../components/Sections/Cards/Cards'
import FooterA from '../components/Sections/Footer/FooterA'
import FooterB from '../components/Sections/Footer/FooterB'
import HeaderA from '../components/Sections/Header/HeaderA'
import HeaderB from '../components/Sections/Header/HeaderB'
import Hero from '../components/Sections/Hero/Hero'
import Tabbed from '../components/Sections/Tabbed/Tabbed'

import type { Palette, User } from '../types/types'
import { metaData } from './newProject'

export const palette: Pick<Palette, 'back' | 'prim' | 'secd' | 'text' | 'accn' | 'name'> = {
  back: '#3AA6B9',
  prim: '#FFD0D0',
  secd: '#C1ECE4',
  text: '#000000',
  accn: '#a849d7aa',
  name: 'default',
}

export const user: Pick<User, 'metaData' | 'components'> = {
  metaData: metaData,
  components: [
    { name: 'headerA', Value: HeaderA, visible: false, kind: 'header', id: 1 },
    { name: 'headerB', Value: HeaderB, visible: false, kind: 'header', id: 2 },
    { name: 'hero', Value: Hero, visible: false, kind: 'section', id: 3 },
    { name: 'cards', Value: Cards, visible: false, kind: 'section', id: 4 },
    { name: 'tabbed', Value: Tabbed, visible: false, kind: 'section', id: 5 },
    { name: 'accordions', Value: Accordions, visible: false, kind: 'section', id: 6 },
    { name: 'footerA', Value: FooterA, visible: false, kind: 'footer', id: 7 },
    { name: 'footerB', Value: FooterB, visible: false, kind: 'footer', id: 8 },
  ],
}
