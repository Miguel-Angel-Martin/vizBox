import { Component, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';

import { Pet } from 'pet-store';
import { PetPhoto } from './pet-photo';
import { UPLOAD_SERVICE } from '@avl-controls/ng-binders';
import { AvlUploadService } from '@avl-controls/interfaces';
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

  constructor(@Inject(UPLOAD_SERVICE) private uploadService: AvlUploadService, private sanitizer: DomSanitizer) {}

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

      let petImage = new PetPhoto(nonCachedPhotoUrl);
      img.onload = () => {
        petImage.visible = true;
        URL.revokeObjectURL(petImage.url);
      };
      img.onerror = () => {
        this.uploadService.downloadFile(url)
          .then((data) => {
            const url = URL.createObjectURL(data);
            img.src = url;
            petImage.url = <string>this.sanitizer.bypassSecurityTrustUrl(url);
          });
      };
      return petImage;
    });
  }
}
