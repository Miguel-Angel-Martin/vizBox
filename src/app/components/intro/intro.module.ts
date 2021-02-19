import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { IntroComponent } from './intro.component';
import { IntroRoutingModule } from './intro-routing.module';
import { PetsComponent } from './pets/pets.component';
import { PetDialogComponent } from './pet-dialog/pet-dialog.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { UPLOAD_SERVICE, UploadService } from '@avl-controls/ng-binders';

@NgModule({
  imports: [SharedModule, FormsModule, IntroRoutingModule],
  declarations: [IntroComponent, PetsComponent, PetDetailComponent, PetDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [IntroRoutingModule],
  providers: [
    { provide: UPLOAD_SERVICE, useClass: UploadService }
  ]
})
export class IntroModule {}
