import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AvlNgBindersModule } from '@avl-controls/ng-binders';
import { AvlDialogModule } from '@avl-ng-controls/dialog';
import { AvlNavigationModule } from '@avl-ng-controls/navigation';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AvlTokenInterceptor } from '@avl-ng-controls/auth';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    AvlDialogModule,
    AvlNavigationModule,
    AvlNgBindersModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,

    AvlDialogModule,
    AvlNavigationModule,
    AvlNgBindersModule,
    TranslateModule,
  ]
})
export class SharedModule {}
