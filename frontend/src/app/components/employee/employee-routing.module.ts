import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailEmployeeComponent } from './detail/detail-employee.component';
import { ListEmployeeComponent } from './list/list-employee.component';



const routes: Routes = [
  {
    path: 'list', component: ListEmployeeComponent
  },
  {
    path: 'detail', component: DetailEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
