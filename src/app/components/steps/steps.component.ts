import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

import { Subscription } from 'rxjs';

import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  providers: [MessageService, OrderService],
})
export class StepsComponent implements OnInit {
  title = 'SigortaSatis';
  items: MenuItem[];

  subscription: Subscription;

  constructor(
    public messageService: MessageService,
    public orderService: OrderService
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Poliçe Seçimi',
        routerLink: 'select',
      },
      {
        label: 'Sigortalı Bilgileri',
        routerLink: 'personal',
      },
      {
        label: 'Ödeme',
        routerLink: 'payment',
      },
      {
        label: 'Poliçe Özeti',
        routerLink: 'confirmation',
      },
    ];

    this.subscription = this.orderService.paymentComplete$.subscribe(
      (personalInformation) => {
        this.messageService.add({
          severity: 'success',
          summary: 'İşlem Başarılı',
          detail:
            'Sayın, ' +
            personalInformation.FirstName +
            ' ' +
            personalInformation.LastName +
            ' poliçe kaydınız alınmıştır.',
        });
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
