import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('app/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('app/components/intro/intro.module').then(m => m.IntroModule),
  },
  {
    path: 'about',
    loadChildren: () => import('app/components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'logging-demo',
    loadChildren: () => import('app/components/logging-demo/logging-demo.module').then(m => m.LoggingDemoModule)
  },
  { path: 'error-page', component: ErrorPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
