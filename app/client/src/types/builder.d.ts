export interface componentType {
  name: string
  description: string
}

export interface builderType {
  config: object
  components: componentType[]
}