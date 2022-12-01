import CreditCard from "../entities/CreditCard"
import VerifyCreditCard from "../services/VerifyCreditCard"

test('Deve verificar se o formato do cartao eh valido', () => {
  const creditCard = new CreditCard('5445-9740-9663-0908')
  expect(creditCard).toBeTruthy()
})

test('Deve verificar se o formato do cartao eh invalido', () => {
  expect(() => new CreditCard('0000-0000-0000-0000')).toThrow(new Error('Invalid credit card'))
})

test('Deve verificar se o cartao aceita cobrancas no credito', () => {
  const creditCard = new CreditCard('5445-9740-9663-0908')
  VerifyCreditCard.verify(creditCard)
  expect(creditCard.status).toBe('Confirmed')
})