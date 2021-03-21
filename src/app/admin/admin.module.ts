import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';



@NgModule({
  declarations: [
    ManageUsersComponent,
    ManageCategoriesComponent,
    ManageOrdersComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
