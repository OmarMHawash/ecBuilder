import Accordions from '../components/Sections/Accordions/Accordions'
import FooterA from '../components/Sections/Footer/FooterA'
import FooterB from '../components/Sections/Footer/FooterB'
import HeaderA from '../components/Sections/Header/HeaderA'
import HeaderB from '../components/Sections/Header/HeaderB'
import Hero from '../components/Sections/Hero/Hero'

import type { Palette, User } from '../types/types'
import { metaData } from './newProject'

export const palette: Pick<Palette, 'back' | 'prim' | 'secd' | 'text' | 'accn'> = {
  back: '#3AA6B9',
  prim: '#FFD0D0',
  secd: '#C1ECE4',
  text: '#000000',
  accn: '#a849d7aa',
}

export const user: Pick<User, 'metaData' | 'components'> = {
  metaData: metaData,
  components: [
    { name: 'headerA', Value: HeaderA, visible: false, kind: 'header' },
    { name: 'headerB', Value: HeaderB, visible: false, kind: 'header' },
    { name: 'hero', Value: Hero, visible: false, kind: 'section' },
    { name: 'accordions', Value: Accordions, visible: false, kind: 'section' },
    { name: 'footerA', Value: FooterA, visible: false, kind: 'footer' },
    { name: 'footerB', Value: FooterB, visible: false, kind: 'footer' },
  ],
}
