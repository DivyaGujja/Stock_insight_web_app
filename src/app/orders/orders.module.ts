import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { OrdersSearchComponent } from './orders-search/orders-search.component';

@NgModule({
  declarations: [
      OrdersSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule,
    RouterModule
  ],
  exports: [
    OrdersSearchComponent,
    DataTablesModule
  ]
})
export class OrdersModule { }
