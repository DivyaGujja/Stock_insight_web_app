import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { InventorySearchComponent } from '../features/inventory/inventory-search/inventory-search.component';
import { OrdersSearchComponent } from '../features/orders/orders-search/orders-search.component';

const appRoutes: Routes = [{
  path: 'StockLookups', component: InventorySearchComponent },{
  path: 'OrdersSearch', component: OrdersSearchComponent
  }];

@NgModule({
  declarations: [
    ToolbarComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    ToolbarComponent,
    NavigationComponent,
    FooterComponent,
    RouterModule
  ]
})
export class LayoutModule { }
