import type { Palette } from '../types/palette'

export const paletteDefaults: Pick<
  Palette,
  'back' | 'prim' | 'secd' | 'text' | 'accn'
> = {
  back: '#3AA6B9',
  prim: '#FFD0D0',
  secd: '#C1ECE4',
  text: '#000000',
  accn: '#a849d7aa',
}
