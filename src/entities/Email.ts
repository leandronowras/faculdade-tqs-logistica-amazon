export default class Email {
  emailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  status: string;

  constructor(
    readonly email: string
  ) {
    if (!this.isValid(email)) throw new Error('Invalid email')
    this.status = 'Waiting'
  }

  isValid(email: string) {
    if (email.match(this.emailFormat)) return true
    return false
  }
}