import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paymentInformation: any;

  selectedPolicy: any;

  submitted: boolean = false;

  paymentActive: boolean = false;

  constructor(public orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.paymentInformation =
      this.orderService.getOrderInformation().paymentInformation;

    this.selectedPolicy =
      this.orderService.getOrderInformation().selectedPolicy;
  }

  nextPage() {
    if (this.paymentActive == false) {
      if (
        this.paymentInformation.CardHolderFirstNameLastName &&
        this.paymentInformation.CreditCardNumber &&
        this.paymentInformation.ValidThru &&
        this.paymentInformation.CardValidationValue
      ) {
        this.orderService.orderInformation.paymentInformation =
          this.paymentInformation;
        this.router.navigate(['confirmation']);
      }
    } // ödemeden devam et seçildiyse inputlardaki değerler yerine boş değerler gidecek
    else {
      this.orderService.orderInformation.paymentInformation.CardHolderFirstNameLastName =
        null;
      this.orderService.orderInformation.paymentInformation.CreditCardNumber =
        null;
      this.orderService.orderInformation.paymentInformation.ValidThru = null;
      this.orderService.orderInformation.paymentInformation.CardValidationValue =
        null;
      this.orderService.orderInformation.paymentInformation.PaymentType = null;
      this.router.navigate(['confirmation']);
    }

    this.submitted = true;
  }

  prevPage() {
    this.router.navigate(['personal']);
  }
}
