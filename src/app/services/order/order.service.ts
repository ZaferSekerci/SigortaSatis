import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class OrderService {
  orderInformation = {
    selectedPolicy: {
      title: '',
      PolicyPrice: null,
    },
    personalInformation: {
      FirstName: '',
      LastName: '',
      PhoneNumber: null,
      City: '',
      Email: '',
    },
    paymentInformation: {
      CardHolderFirstNameLastName: '',
      CreditCardNumber: '',
      ValidThru: '',
      CardValidationValue: '',
      PaymentType: 'Peşin',
    },
  };

  private paymentComplete = new Subject<any>();

  paymentComplete$ = this.paymentComplete.asObservable();
  paymentInformation: any;

  getOrderInformation() {
    return this.orderInformation;
  }

  setOrderInformation(orderInformation) {
    this.orderInformation = orderInformation;
  }

  complete() {
    this.paymentComplete.next(this.orderInformation.personalInformation);
  }
}
