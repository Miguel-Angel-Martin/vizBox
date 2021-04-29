import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AvlNgBindersModule } from '@avl-controls/ng-binders';
import { AvlDialogModule } from '@avl-ng-controls/dialog';
import { AvlNavigationModule } from '@avl-ng-controls/navigation';
import { TranslateModule } from '@ngx-translate/core';
import { AvlNotificationModule } from '@avl-ng-controls/notification';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AvlNavigationModule,
    AvlNotificationModule,
    AvlDialogModule,
    AvlNgBindersModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    AvlNavigationModule,
    AvlNotificationModule,
    AvlDialogModule,
    AvlNgBindersModule,
    TranslateModule,
  ]
})
export class SharedModule {}
