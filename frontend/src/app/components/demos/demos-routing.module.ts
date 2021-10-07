import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from '@avl-services/ng-services';
import { DemosComponent } from './demos.component';

const aboutRoutes: Routes = [
  { path: '', canDeactivate: [UnsavedChangesGuard], component: DemosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
})
export class LoggingDemoRoutingModule {}
