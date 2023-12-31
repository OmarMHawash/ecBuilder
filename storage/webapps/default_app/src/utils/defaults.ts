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
  components: [],
}
