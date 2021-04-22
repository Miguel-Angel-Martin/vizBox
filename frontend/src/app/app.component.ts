import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { ApplicationReference, TopLevelPage } from '@avl-ng-controls/navigation';
import { AvlAuthService } from '@avl-ng-controls/auth';
import {
  AvlOverflowMenuItem,
  AvlOverflowMenuGroup,
} from '@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.api';
import { ThemeService, ShellCommunicationService } from '@avl-services/ng-services';

import '@avl-controls/core/dist/avl-icon/avl-icon';
import '@avl-controls/core/dist/avl-icon-button/avl-icon-button';
import '@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu';
import '@avl-controls/core/dist/avl-radio-group/avl-radio-group';
import '@avl-controls/core/dist/avl-radio-button/avl-radio-button';
import '@avl-controls/core/dist/avl-dropdown/avl-dropdown';

import { AVL_DIALOG_INFO, COUNTRIES, HOME_PAGE_URL, ICON, MENU, THEMES } from './app.consts';

import { SettingsService, SolutionSettings } from './core/services/settings.service';
import { OverflowMenuService } from './core/services/overflow-menu.service';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'viz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnInit {
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
  public countries: Array<{ label: string; value: string }> = COUNTRIES;
  public logLevelOptions: Array<{
    label: string;
    value: string;
  }> = this.settingsService.initLogLevelOptions();

  public settings: SolutionSettings = this.settingsService.getSettings();

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

  // Side Navigation
  public sideNavItems = [
    new TopLevelPage(
      this.translateService.instant('VizBoxStarterKit.AvlWebStarterKit'),
      '/intro',
      'home'
    ),
    new TopLevelPage(this.translateService.instant('VizBoxStarterKit.About'), '/about', 'info'),
    new TopLevelPage(
      this.translateService.instant('VizBoxStarterKit.LoggingDemo'),
      '/logging-demo',
      'icons:list'
    ),
    new TopLevelPage(
      this.translateService.instant('VizBoxStarterKit.Employee'),
      '/employee/list',
      'icons:link'
    ),
  ];

  private destroyed$: Subject<void> = new Subject();

  // About Dialog Info
  public isAboutDialogOpen = false;
  public AVLDialogInfo = AVL_DIALOG_INFO;

  constructor(
    private authService: AvlAuthService,
    private translateService: TranslateService,
    readonly themeService: ThemeService,
    readonly shellCommunicationService: ShellCommunicationService,
    readonly settingsService: SettingsService,
    readonly overflowMenuService: OverflowMenuService,
    readonly appService: AppService
  ) {
    // Subscription to Shell
    this.appService.ifChildSubscribeToShell();
  }
  public ngOnInit(): void {
    this.menuItems = this.overflowMenuService.translateMenu(MENU);

    this.authService.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (user) => (this.menuItems = this.overflowMenuService.translateDependingOnUser(user))
      );
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
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
}
