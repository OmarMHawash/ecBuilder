import { createContext } from 'react'
import type { Palette } from '../types/types'
import { palette } from '../utils/defaults'

export interface PaletteContext {
  palette: Palette
  setPalette: (palette: Palette) => void
}

export const paletteContext = createContext<PaletteContext>({
  palette: { ...palette },
  setPalette: () => {},
})
