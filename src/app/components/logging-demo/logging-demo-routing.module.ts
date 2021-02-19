import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggingDemoComponent } from './logging-demo.component';

const aboutRoutes: Routes = [{ path: '', component: LoggingDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})
export class LoggingDemoRoutingModule {}
