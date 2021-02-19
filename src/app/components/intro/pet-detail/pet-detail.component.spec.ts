import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { SharedModule } from '../../../shared/shared.module';
import { PetDetailComponent } from './pet-detail.component';
import { HttpClientModule } from '@angular/common/http';

describe('PetDetailComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetDetailComponent],
      imports: [SharedModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should create the PetDetailComponent', () => {
    const fixture = TestBed.createComponent(PetDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });
});
