import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UnsavedChangesModule } from '@avl-services/ng-services';
import { SharedModule } from '../../shared/shared.module';
import { LoggingDemoRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';

@NgModule({
  imports: [SharedModule, LoggingDemoRoutingModule, ReactiveFormsModule, UnsavedChangesModule],
  declarations: [DemosComponent],
  exports: [DemosComponent, LoggingDemoRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemosModule {}
