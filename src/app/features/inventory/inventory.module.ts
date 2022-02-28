import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { InventorySearchComponent } from './inventory-search/inventory-search.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

@NgModule({
  declarations: [
    InventoryListComponent,
    InventorySearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    DataTablesModule,
    RouterModule
  ],
  exports: [
    InventorySearchComponent,
    DataTablesModule
  ]
})
export class InventoryModule { }
