import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PageNotFoundGuard } from './core/guards/page-not-found.guard';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('app/components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'intro',
    loadChildren: () => import('app/components/intro/intro.module').then((m) => m.IntroModule),
  },
  {
    path: 'about',
    loadChildren: () => import('app/components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'demos',
    loadChildren: () => import('app/components/demos/demos.module').then((m) => m.DemosModule),
  },
  {
    path: 'controls',
    loadChildren: () => import('app/components/controls/controls.module').then((m) => m.ControlsModule),
  },
  { path: 'error-page', component: ErrorPageComponent },
  { path: '**', component: PageNotFoundComponent, canActivate: [PageNotFoundGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [PageNotFoundGuard],
})
export class AppRoutingModule { }
