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

interface MetaData {
  title: string
  logo: string
  description: string
  mini_desc: string
  palette_id: number
}
