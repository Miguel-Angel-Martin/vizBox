import { Component, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';

import { Pet } from 'pet-store';
import { PetPhoto } from './pet-photo';
import { UploadService, UPLOAD_SERVICE } from '@avl-services/ng-services';
import { DomSanitizer } from '@angular/platform-browser';

import '@avl-controls/core/dist/avl-card/avl-card';

@Component({
  selector: 'viz-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnChanges {
  @Input() pet: Pet;

  petPhotos: PetPhoto[];

  constructor(@Inject(UPLOAD_SERVICE) private uploadService: UploadService, private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    const pet = changes.pet;
    if (pet && pet.currentValue && pet.currentValue.photoUrls) {
      this.preloadPhotos();
    }
  }

  private preloadPhotos() {
    this.petPhotos = this.pet.photoUrls.map((url, i) => {
      const nonCachedPhotoUrl = `${url}?${this.pet.id}${i}`;
      const img = new Image();
      img.src = nonCachedPhotoUrl;

      const petImage = new PetPhoto(nonCachedPhotoUrl);
      img.onload = () => {
        petImage.visible = true;
        URL.revokeObjectURL(petImage.url);
      };
      img.onerror = () => {
        this.uploadService.downloadFile(url, null,
          (data: Blob) => {
            const objectUrl = URL.createObjectURL(data);
            img.src = objectUrl;
            petImage.url = <string>this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        });
      };
      return petImage;
    });
  }
}
