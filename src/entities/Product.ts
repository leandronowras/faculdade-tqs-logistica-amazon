export default class Product {
  maxHeight = 5000 // centimetros
  maxWidth = 5000 // centrimetros
  maxWeight = 10000 // grama

  constructor(
    readonly height: number,
    readonly width: number,
    readonly weight: number
  ) {
    if(!this.isValidHeight(height)) throw new Error('Invalid height')
    if(!this.isValidWidth(width)) throw new Error('Invalid width')
    if(!this.isValidWeight(weight)) throw new Error('Invalid weight')
  }

  isValidHeight(height: number) {
    if (height > this.maxHeight) return false
    return true
  }

  isValidWidth(width: number) {
    if (width > this.maxWidth) return false
    return true
  }
  isValidWeight(height: number) {
    if (height > this.maxWeight) return false
    return true
  }
}