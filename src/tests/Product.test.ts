import Product from "../entities/Product"

test('Deve criar um produto valido', () => {
  const product = new Product(100, 100, 100)
  expect(product).toBeTruthy()
}) 

test('Deve dar erro ao criar um produto de altura invalido', () => {
  expect(() => new Product(1000000, 100, 100)).toThrow(new Error('Invalid height'))
})

test('Deve dar erro ao criar um produto de largura invalida', () => {
  expect(() => new Product(100, 10000000, 100)).toThrow(new Error('Invalid width'))
})

test('Deve dar erro ao criar um produto de peso invalido', () => {
  expect(() => new Product(100, 100, 100000000)).toThrow(new Error('Invalid weight'))
})

