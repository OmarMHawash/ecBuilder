import type { Palette } from '../types/palette'

interface PaletteContext {
  palette: Palette
  setPalette: (palette: Palette) => void
}
