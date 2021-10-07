import { Component, Input, EventEmitter, Output, Inject } from '@angular/core';
import { Pet, BASE_PATH } from 'pet-store';
import { AvlFile } from '@avl-interfaces/interfaces';
import { AvlUploadMenuItemClickedEventDetail } from '@avl-controls/core/dist/avl-upload/avl-upload.api';
import { TranslateService } from '@ngx-translate/core';

import '@avl-controls/core/dist/avl-textfield/avl-textfield';
import '@avl-controls/core/dist/avl-dropdown/avl-dropdown';
import '@avl-controls/core/dist/avl-upload/avl-upload';
import '@avl-controls/core/dist/avl-button/avl-button';

@Component({
  selector: 'viz-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.css']
})
export class PetDialogComponent {
  @Input() open = false;
  @Input() edit = false;
  @Input() pet: Pet;

  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Pet>();

  statusOptions = this.getStatusOptions();
  dialogPet = this.getNewPet();

  uploadPath: string;

  uploadedFiles: AvlFile[] = [];

  constructor(private translateService: TranslateService, @Inject(BASE_PATH) basePath: string) {
    this.uploadPath = `${basePath}/v2/Upload`;
  }

  private numFilesUploading = 0;

  dialogOpen(open) {
    if (open) {
      this.dialogPet = this.edit ? Object.assign({}, this.pet) : this.getNewPet();
      if (this.edit) {
        this.uploadedFiles = this.dialogPet.photoUrls.map( (url, index) => {
          const name = url.split('_', 2)[1] || `file_${index}.jpg`;
          return {
            name: name,
            status: 'complete',
            downloadUrl: url
          } as AvlFile;
        });
      }
    } else {
      this.closeDialog();
      this.uploadedFiles = [];
    }
  }

  public closeDialog() {
    this.cancel.emit();
    this.open = false;
  }

  public onFileUploadComplete(file: AvlFile) {
    this.dialogPet.photoUrls.push(file.downloadUrl);
    this.numFilesUploading -= 1;
  }

  public onFileMenuItemClicked(detail: AvlUploadMenuItemClickedEventDetail) {
    const photoUrls = this.dialogPet.photoUrls;
    if (detail.item.label === this.translateService.instant('VizBoxStarterKit.Remove')) {
      const index = photoUrls.indexOf(detail.value.downloadUrl);
      if (index !== -1) {
        photoUrls.splice(index, 1);
      }
    }
  }

  public onFileUploadStarted(file: AvlFile) {
    this.numFilesUploading += 1;
  }

  public get filesUploading(): boolean {
    return this.numFilesUploading > 0;
  }

  savePet(formValid: boolean) {
    if (!formValid) {
      return;
    }
    this.save.emit(this.dialogPet);
    this.open = false;
  }

  private getNewPet(): Pet {
    // Pet interface was generated from Swagger File
    // -> create a Pet class otherwise.
    return {
      name: '',
      status: this.statusOptions[0].value,
      photoUrls: []
    };
  }

  private getStatusOptions() {
    // Status was generated from Swagger File as object/string
    // -> create an enum otherwise.
    return Object.keys(Pet.StatusEnum).map(key => {
      const enumLabel = Pet.StatusEnum[key];
      let label: string;
      switch (enumLabel) {
        case 'available':
          label = this.translateService.instant('VizBoxStarterKit.Available');
          break;
        case 'pending':
          label = this.translateService.instant('VizBoxStarterKit.Pending');
          break;
        case 'sold':
          label = this.translateService.instant('VizBoxStarterKit.Sold');
          break;
      }
      return { value: enumLabel, label: label };
    });
  }
}
