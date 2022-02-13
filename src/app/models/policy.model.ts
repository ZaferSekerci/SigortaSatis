export interface Policy {
  id: any;
  title: string;
  price: number;
}
export class Order {
  policyName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  email: string;
  cardHolderFirstNameLastName: string;
  creditCardNumber: string;
  validThru: string;
  cardValidationValue: string;
  paymentType: string;
  policyPrice: string;
}
