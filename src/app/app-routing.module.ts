import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { StepsComponent } from './components/steps/steps.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StepsComponent,
        children: [
          { path: '', redirectTo: 'select', pathMatch: 'full' },
          { path: 'personal', component: CustomerComponent },
          { path: 'confirmation', component: ConfirmationComponent },
          { path: 'payment', component: PaymentComponent },
          { path: 'select', component: SelectComponent },
          { path: 'policies', component: SelectComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
