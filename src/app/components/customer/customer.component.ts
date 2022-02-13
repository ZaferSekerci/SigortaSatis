import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  personalInformation: any;

  emailForm: FormGroup;

  submitted: boolean = false;

  cities: City[];
  constructor(
    public orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.cities = [
      { name: 'Adana' },
      { name: 'Adıyaman' },
      { name: 'Afyon' },
      { name: 'Ağrı' },
      { name: 'Aksaray' },
      { name: 'Amasya' },
      { name: 'Ankara' },
      { name: 'Antalya' },
      { name: 'Ardahan' },
      { name: 'Artvin' },
      { name: 'Aydın' },
      { name: 'Balıkesir' },
      { name: 'Batman' },
      { name: 'Bartın' },
      { name: 'Bayburt' },
      { name: 'Bilecik' },
      { name: 'Bingöl' },
      { name: 'Bitlis' },
      { name: 'Bolu' },
      { name: 'Burdur' },
      { name: 'Bursa' },
      { name: 'Çanakkale' },
      { name: 'Çankırı' },
      { name: 'Çorum' },
      { name: 'Denizli' },
      { name: 'Diyarbakır' },
      { name: 'Düzce' },
      { name: 'Edirne' },
      { name: 'Elazığ' },
      { name: 'Erzincan' },
      { name: 'Erzurum' },
      { name: 'Eskişehir' },
      { name: 'Gaziantep' },
      { name: 'Giresun' },
      { name: 'Gümüşhane' },
      { name: 'Hakkari' },
      { name: 'Hatay' },
      { name: 'Iğdır' },
      { name: 'Isparta ' },
      { name: 'İstanbul' },
      { name: 'İzmir' },
      { name: 'Kahramanmaraş' },
      { name: 'Karabük' },
      { name: 'Karaman' },
      { name: 'Kars' },
      { name: 'Kastamonu' },
      { name: 'Kayseri' },
      { name: 'Kırıkkale' },
      { name: 'Kırklareli' },
      { name: 'Kırşehir' },
      { name: 'Kilis' },
      { name: 'Kocaeli' },
      { name: 'Konya' },
      { name: 'Kütahya' },
      { name: 'Malatya' },
      { name: 'Manisa' },
      { name: 'Mardin' },
      { name: 'Mersin' },
      { name: 'Muğla' },
      { name: 'Muş' },
      { name: 'Nevşehir' },
      { name: 'Niğde' },
      { name: 'Ordu' },
      { name: 'Osmaniye' },
      { name: 'Rize' },
      { name: 'Sakarya' },
      { name: 'Samsun' },
      { name: 'Siirt' },
      { name: 'Sinop' },
      { name: 'Sivas' },
      { name: 'Şanlıurfa' },
      { name: 'Şırnak' },
      { name: 'Tekirdağ' },
      { name: 'Tokat' },
      { name: 'Trabzon' },
      { name: 'Tunceli' },
      { name: 'Uşak' },
      { name: 'Van' },
      { name: 'Yalova' },
      { name: 'Yozgat' },
      { name: 'Zonguldak' },
    ];
  }

  ngOnInit() {
    this.personalInformation =
      this.orderService.getOrderInformation().personalInformation;

    this.emailForm = this.formBuilder.group({
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  get f() {
    return this.emailForm.controls;
  }

  nextPage() {
    if (
      this.personalInformation.FirstName &&
      this.personalInformation.LastName &&
      this.personalInformation.PhoneNumber &&
      this.personalInformation.City.name &&
      this.personalInformation.Email
    ) {
      this.orderService.orderInformation.personalInformation =
        this.personalInformation;
      this.router.navigate(['payment']);

      return;
    }

    this.submitted = true;
  }

  prevPage() {
    this.router.navigate(['select']);
  }
}
