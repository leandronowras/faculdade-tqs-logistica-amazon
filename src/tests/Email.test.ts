import Email from "../entities/Email";
import ValidadeEmailService from "../services/ValidadeEmail";

test("Deve validar se o formato de email eh valido", () => {
  const email = new Email('test@sempreceub.com')
  expect(email).toBeTruthy()
})

test("Deve dar erro ao tentar cadastrar um email invalido", () => {
  expect(() => new Email("test@test@sempreceub.com")).toThrow(new Error("Invalid email"));
})

test("Deve verificar se o endereco de email ainda nao foi validado", () => {
  const email = new Email("test@sempreceub.com")
  expect(email.status).toBe('Waiting')
})

// teste de integracao
test("Deve confirmar se o endereco de email foi validado", () => {
  const email = new Email("test@sempreceub.com")
  ValidadeEmailService.validade(email)
  expect(email.status).toBe('Validated')
})