import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { OrderService } from './services/order/order.service';

import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { StepsComponent } from './components/steps/steps.component';
import { SelectComponent } from './components/select/select.component';
import { RestService } from './services/rest/rest.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    CommonModule,
    StepsModule,
    TabViewModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    ToastModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    PaymentComponent,
    ConfirmationComponent,
    SelectComponent,
    StepsComponent,
  ],
  providers: [OrderService, RestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
