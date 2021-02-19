import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [SharedModule, AboutRoutingModule],
  declarations: [AboutComponent],
  exports: [AboutRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule {}
