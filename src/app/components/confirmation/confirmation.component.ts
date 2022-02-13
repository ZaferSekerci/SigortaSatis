import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { OrderService } from '../../services/order/order.service';
import { RestService } from 'src/app/services/rest/rest.service';
import { Order } from 'src/app/models/policy.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  orderInformation: any;

  selectedPolicy: any;

  readyOrder = new Order();

  constructor(
    public orderService: OrderService,
    private router: Router,
    public restService: RestService
  ) {}

  ngOnInit() {
    this.orderInformation = this.orderService.orderInformation;
    // this.readyOrder.policyName = 'deneme';

    this.readyOrder.policyName =
      this.orderService.orderInformation.selectedPolicy.title;
    this.readyOrder.firstName =
      this.orderService.orderInformation.personalInformation.FirstName;
    this.readyOrder.lastName =
      this.orderService.orderInformation.personalInformation.LastName;
    this.readyOrder.phoneNumber =
      this.orderService.orderInformation.personalInformation.PhoneNumber;
    this.readyOrder.city = this.orderInformation.personalInformation.City.name;
    this.readyOrder.email =
      this.orderService.orderInformation.personalInformation.Email;
    this.readyOrder.cardHolderFirstNameLastName =
      this.orderService.orderInformation.paymentInformation.CardHolderFirstNameLastName;
    this.readyOrder.creditCardNumber =
      this.orderService.orderInformation.paymentInformation.CreditCardNumber;
    this.readyOrder.validThru =
      this.orderService.orderInformation.paymentInformation.ValidThru;
    this.readyOrder.cardValidationValue =
      this.orderService.orderInformation.paymentInformation.CardValidationValue;
    this.readyOrder.paymentType =
      this.orderService.orderInformation.paymentInformation.PaymentType;
    this.readyOrder.policyPrice =
      this.orderService.orderInformation.selectedPolicy.PolicyPrice;
    console.log(this.readyOrder);
  }

  complete() {
    this.orderService.complete();

    console.log(this.readyOrder);

    this.restService.create(this.readyOrder).subscribe((res: any) => {
      console.log();
    });
    console.log(this.orderService.orderInformation.selectedPolicy.title);
  }

  prevPage() {
    this.router.navigate(['payment']);
  }
}
