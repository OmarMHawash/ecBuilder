export interface Palette {
  back: string
  prim: string
  secd: string
  text: string
  accn: string
}

export interface User {
  metaData: object
  components: Array<String>
}

export interface Webapp {
  id: number
  name: string
  logo: string
  description: string
  'mini-description': string
  palette_id: number
}
