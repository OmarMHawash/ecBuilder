import { createContext } from 'react'
import { palette } from '../utils/defaults'
import type { Palette } from '../types/types'
export interface PaletteContext {
  palette: Palette
  setPalette: (palette: Palette) => void
}

export const paletteContext = createContext<PaletteContext>({
  palette: { ...palette },
  setPalette: () => {},
})
