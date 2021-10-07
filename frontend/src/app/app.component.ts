import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import {
  AvlAuthService,
  ThemeService,
  ShellCommunicationService,
  UnsavedChangesService,
} from '@avl-services/ng-services';

import { ApplicationReference, TopLevelPage } from '@avl-ng-controls/navigation';
import {
  AvlOverflowMenuItem,
  AvlOverflowMenuGroup,
} from '@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.api';

import '@avl-controls/core/dist/avl-icon/avl-icon';
import '@avl-controls/core/dist/avl-icon-button/avl-icon-button';
import '@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu';
import '@avl-controls/core/dist/avl-radio-group/avl-radio-group';
import '@avl-controls/core/dist/avl-radio-button/avl-radio-button';
import '@avl-controls/core/dist/avl-dropdown/avl-dropdown';
import '@avl-controls/core/dist/avl-list/avl-list';
import '@avl-controls/datatable/dist/avl-datatable/avl-datatable';

import {
  AVL_DIALOG_INFO,
  DATE_TIME_FORMATS,
  DATE_TIME_MAPPINGS,
  HOME_PAGE_URL,
  ICON,
  MENU,
  DECIMAL_SEPARATORS,
  DECIMAL_SEPARATOR_MAPPINGS,
  THEMES,
} from './app.consts';

import { SettingsService, SolutionSettings } from './core/services/settings.service';
import { OverflowMenuService } from './core/services/overflow-menu.service';
import { AppService } from './core/services/app.service';
import { BaseComponent } from './shared/components/base/base.component';

@Component({
  selector: 'viz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends BaseComponent implements OnDestroy, OnInit {
  icon = ICON;

  // App-bar
  public homePageUrl = HOME_PAGE_URL;
  public currentApp: ApplicationReference = {
    name: this.translateService.instant('VizBoxStarterKit.Introduction'),
    url: '/home',
    image: 'assets/images/vizbox-logo.svg',
  };

  // Settings Dialog Info
  public isSettingsDialogOpen = false;
  public languages: Array<{ label: string; value: string }> = this.settingsService.initLanguages();
  public countries: Array<{ label: string; value: string }> = this.settingsService.initCountries();
  public dateTimeFormats: Array<{ label: string; value: string }> =
    this.settingsService.initDateTimeFormats();
  public decimalSeparators: Array<{ label: string; value: string }> =
    this.settingsService.initDecimalSeparators();
  public logLevelOptions: Array<{
    label: string;
    value: string;
  }> = this.settingsService.initLogLevelOptions();

  public settings: SolutionSettings = this.settingsService.getSettings();
  public labelCountry = this.translateService.instant('VizBoxStarterKit.Country');
  public labelLanguage = this.translateService.instant('VizBoxStarterKit.Language');
  public labelDateTimeFormat = this.translateService.instant('VizBoxStarterKit.DateTimeFormat');
  public labelDecimalSeparator = this.translateService.instant('VizBoxStarterKit.DecimalSeparator');
  public labelLogLevel = this.translateService.instant('VizBoxStarterKit.LogLevel');
  public labelLogDebounceTime = this.translateService.instant('VizBoxStarterKit.LogDebounceTime');
  public labelLogCapacity = this.translateService.instant('VizBoxStarterKit.LogCapacity');

  // Overflow Menu
  public menuItems: (AvlOverflowMenuItem | AvlOverflowMenuGroup)[];

  private overflowMenuHandlers: { [key: string]: () => void } = {
    login: () => this.authService.login(),
    logout: () => this.authService.logout(),
    settings: () => (this.isSettingsDialogOpen = true),
    about: () => (this.isAboutDialogOpen = true),
    undefined: () => { },
  };

  public isChild: boolean = this.shellCommunicationService.isChild;
  public showLoader = true;
  public shellUrl = '';

  // Side Navigation
  public sideNavItems = [
    new TopLevelPage(
      this.translateService.instant('VizBoxStarterKit.AvlWebStarterKit'),
      '/intro',
      'home'
    ),
    new TopLevelPage(this.translateService.instant('VizBoxStarterKit.About'), '/about', 'info'),
    new TopLevelPage(
      this.translateService.instant('VizBoxStarterKit.Demos'),
      '/demos',
      'icons:list'
    ),
    new TopLevelPage(
      'controls',//this.translateService.instant('VizBoxStarterKit.Demos'),
      '/controls',
      'icons:pets'
    ),
  ];

  // About Dialog Info
  public isAboutDialogOpen = false;
  public avlAboutDialogInfo = AVL_DIALOG_INFO;

  constructor(
    public unsavedChangesService: UnsavedChangesService,
    private authService: AvlAuthService,
    private translateService: TranslateService,
    readonly themeService: ThemeService,
    readonly shellCommunicationService: ShellCommunicationService,
    readonly settingsService: SettingsService,
    readonly overflowMenuService: OverflowMenuService,
    readonly appService: AppService
  ) {
    super();
    // Subscription to Shell
    this.appService.ifChildSubscribeToShell();
    this.settingsService.updateLocalizationService();
  }
  public ngOnInit(): void {
    this.menuItems = this.overflowMenuService.translateMenu(MENU);
    this.authService.user$.pipe(takeUntil(this.destroyed$)).subscribe((user) => {
      this.menuItems = this.overflowMenuService.translateDependingOnUser(user);
      if (this.isChild) {
        // notify shell that user data has changed
        this.shellCommunicationService.updateUserToShell();
      }
    });

    if (this.isChild) {
      // set shellUrl to enable open in new tab for links in nav-menu
      this.shellCommunicationService.shellInfo$
        .pipe(takeUntil(this.destroyed$))
        .subscribe((shellInfo) => (this.shellUrl = shellInfo.url));
    }
  }

  public overflowMenuClicked(item: AvlOverflowMenuItem): void {
    this.overflowMenuHandlers[item.action]();
  }

  public onActivate(): void {
    this.showLoader = false;
  }

  public closeDialog(operation: 'Cancel' | 'Save'): void {
    this.settings = this.settingsService.onDialogClosed(operation, this.settings);
    this.themeService.isDarkTheme = this.settings.theme === THEMES[0];
    this.isSettingsDialogOpen = false;
  }

  public onCountryChanged(event: Event): void {
    const country: AvlLocalizationService.Locale = (<CustomEvent>event).detail.value;

    if (country === this.settings.country) {
      return;
    }

    const dateTimeFormat = DATE_TIME_FORMATS.find(
      (format) => format.label === DATE_TIME_MAPPINGS[country]
    ).value;
    const decimalSeparator = DECIMAL_SEPARATORS.find(
      (format) => format.label === DECIMAL_SEPARATOR_MAPPINGS[country]
    ).value;

    this.settings = {
      ...this.settings,
      country,
      dateTimeFormat,
      decimalSeparator,
    };
  }
}
