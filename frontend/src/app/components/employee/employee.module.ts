import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListEmployeeComponent } from './list/list-employee.component';
import { DetailEmployeeComponent } from './detail/detail-employee.component';



@NgModule({
  declarations: [ListEmployeeComponent, DetailEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
