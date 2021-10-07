import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './about.component';
import { TranslateModule } from '@ngx-translate/core';
import { AvlAuthService } from '@avl-services/ng-services';

describe('AboutComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutComponent],
        imports: [RouterTestingModule.withRoutes([]), SharedModule, TranslateModule.forRoot()],
        providers: [{ provide: AvlAuthService, useClass: AvlAuthService }], // needs AVL MVC Server Side

        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  it(
    'should create the AboutComponent',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(AboutComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
