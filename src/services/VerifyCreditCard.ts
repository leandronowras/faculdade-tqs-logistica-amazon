import CreditCard from "../entities/CreditCard";

export default class VerifyCreditCard {
  static verify(creditCard: CreditCard) {
    creditCard.status = 'Confirmed'
  }
}