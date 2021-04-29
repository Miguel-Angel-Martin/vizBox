import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { INTERCEPTOR_BASE_PATHS, AvlTokenInterceptor } from '@avl-ng-controls/auth';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { NgxTranslateTranslationService } from '@avl-controls/ng-binders';
import {
  LoggingModule,
  NotificationService,
  ThemeService,
  TranslationManagementService,
} from '@avl-services/ng-services';

import { basePath } from 'endpoint.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoggingConfig } from 'logging.config';
import { AvlNotificationModule } from '@avl-ng-controls/notification';
import { FormsModule } from '@angular/forms';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { GraphQLModule } from './graphql.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: 'assets/i18n/avl-controls-core.', suffix: '.json' },
    { prefix: 'assets/i18n/avl-controls-datatable.', suffix: '.json' },
    { prefix: 'assets/i18n/avl-ng-controls-notification.', suffix: '.json' },
    { prefix: 'assets/i18n/vizbox-starter-kit.', suffix: '.json' },
    // latest file translations with same keys will overwrite same translations in files defined before it
  ]);
}

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ErrorPageComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LoggingModule.forRoot(LoggingConfig),
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
    GraphQLModule,
  ],
  providers: [
    ThemeService,
    NotificationService,
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
export class AppModule {
  constructor() { }
}
