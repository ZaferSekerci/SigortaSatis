import { Component, OnInit } from '@angular/core';

import { Policy } from '../../models/policy.model';
import { RestService } from '../../services/rest/rest.service';

import { OrderService } from '../../services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  submitted: boolean = false;

  policies: Policy[] = [];

  selectedPolicy: any;

  constructor(
    public orderService: OrderService,
    private router: Router,
    public restService: RestService
  ) {}
  ngOnInit(): void {
    this.restService.getAll().subscribe((data: Policy[]) => {
      this.policies = data;
    });
    this.selectedPolicy =
      this.orderService.getOrderInformation().selectedPolicy;
  }

  nextPage() {
    if (this.selectedPolicy.PolicyName != '') {
      this.router.navigate(['personal']);
      this.selectedPolicy.PolicyPrice =
        this.selectedPolicy.PolicyName.split(',')[1];
      this.selectedPolicy.PolicyName =
        this.selectedPolicy.PolicyName.split(',')[0];
      this.orderService.orderInformation.selectedPolicy.title =
        this.selectedPolicy.PolicyName;
      this.orderService.orderInformation.selectedPolicy.PolicyPrice =
        this.selectedPolicy.PolicyPrice;
    }
    this.submitted = true;
    console.log(this.selectedPolicy.PolicyName);
  }
}
