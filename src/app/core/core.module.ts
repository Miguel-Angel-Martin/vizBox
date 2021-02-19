import { NgModule, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './guards/auth.guard';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { AvlAuthService, AvlOidcCodeAuthService, AUTH_CONFIG } from '@avl-ng-controls/auth';
import { authConfig } from '../../endpoint.config';

@NgModule({
  imports: [SharedModule, RouterModule],
  providers: [
    AuthGuard,
    { provide: AvlAuthService, useClass: AvlOidcCodeAuthService }, // needs AVL MVC Server Side
    { provide: AUTH_CONFIG, useValue: authConfig }
  ],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
