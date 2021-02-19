import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LoggingDemoRoutingModule } from './logging-demo-routing.module';
import { LoggingDemoComponent } from './logging-demo.component';

@NgModule({
  imports: [SharedModule, LoggingDemoRoutingModule],
  declarations: [LoggingDemoComponent],
  exports: [LoggingDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoggingDemoModule {}
