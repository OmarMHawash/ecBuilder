export interface Palette {
  back: string
  prim: string
  secd: string
  text: string
  accn: string
  name: string
}

export interface User {
  metaData: MetaData
  components: Array<Component>
}

export interface Webapp {
  id: number
  name: string
  logo: string
  description: string
  mini_desc: string
  palette_id: number
}

export interface Component {
  name: string
  Value: any
  visible: boolean
  kind: string
  id: number
}

interface MetaData {
  title: string
  logo: string
  description: string
  mini_desc: string
  palette_id: number
}
