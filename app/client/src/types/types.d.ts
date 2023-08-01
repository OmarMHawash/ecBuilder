export interface Palette {
  back: string
  prim: string
  secd: string
  text: string
  accn: string
}

export interface User {
  metaData: object
  components: Array<Component>
}

export interface Webapp {
  id: number
  name: string
  logo: string
  description: string
  'mini-description': string
  palette_id: number
}

export interface Component {
  name: string
  Value: any
  visible: boolean
  kind: string
}
