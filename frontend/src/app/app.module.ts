import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {
  LoggingModule,
  NotificationService,
  ThemeService,
  TranslationManagementService,
  INTERCEPTOR_BASE_PATHS,
  AvlTokenInterceptor,
  NgxTranslateTranslationService,
} from '@avl-services/ng-services';

import { AvlNotificationModule } from '@avl-ng-controls/notification';
import { basePath } from 'endpoint.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { ApiModule } from '../pet-store/api.module';
import { BASE_PATH } from '../pet-store/variables';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LoggingConfig } from 'logging.config';
import { FilterNotificationsPipe } from './core/services/filter-notifications-pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: 'assets/i18n/avl-controls-core.', suffix: '.json' },
    { prefix: 'assets/i18n/avl-controls-datatable.', suffix: '.json' },
    { prefix: 'assets/i18n/avl-ng-controls-common.', suffix: '.json' },
    { prefix: 'assets/i18n/avl-ng-controls-notification.', suffix: '.json' },
    { prefix: 'assets/i18n/vizbox-starter-kit.', suffix: '.json' },
    // latest file translations with same keys will overwrite same translations in files defined before it
  ]);
}

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ErrorPageComponent, NotificationsComponent, FilterNotificationsPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoggingModule.forRoot(LoggingConfig),
    ApiModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SharedModule,
    CoreModule,
    AppRoutingModule,
    AvlNotificationModule,
  ],
  providers: [
    ThemeService,
    NotificationService,
    { provide: BASE_PATH, useValue: basePath },
    {
      provide: INTERCEPTOR_BASE_PATHS,
      useValue: [basePath], // For multiple APIs, add them in this array
      // If you have API on the same origin, instead of useValue you can use the following:
      // useFactory: (s: PlatformLocation) => [s.getBaseHrefFromDOM(), basePath],
      // deps: [PlatformLocation]
    },
    { provide: HTTP_INTERCEPTORS, useClass: AvlTokenInterceptor, multi: true },
    NgxTranslateTranslationService,
    {
      provide: APP_INITIALIZER,
      useFactory: (translationManagementService: TranslationManagementService) =>
        translationManagementService.initializeTranslations(),
      multi: true,
      deps: [TranslationManagementService],
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
