import { createContext } from 'react'
import type { PaletteContext } from '../types/paletteContext'
import { paletteDefaults } from '../utils/defaults'

export const paletteContext = createContext<PaletteContext>({
  palette: { ...paletteDefaults },
  setPalette: () => {},
})
