import type { Palette } from './palette'
import type { Webapp } from './webapp'

export interface User {
  id: number
  name: string
  webapp: Webapp
  palette: Palette
}
