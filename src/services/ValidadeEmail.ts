import Email from "../entities/Email";

export default class ValidadeEmailService {
  static validade(email: Email) {
    email.status = 'Validated'
  }
}