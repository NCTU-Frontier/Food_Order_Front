import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './article/homepage/homepage.component';
import { OrderListComponent } from './article/order-system/order-list/order-list.component';
import { OrderTableComponent } from './article/order-system/order-table/order-table.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-table', component: OrderTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ToolBoxFrontRoutingModule { }
