import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const introRoutes: Routes = [{ path: '', component: IntroComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(introRoutes)],
  exports: [RouterModule]
})
export class IntroRoutingModule {}
