import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ShellCommunicationService } from '@avl-services/ng-services';
import { SettingsService } from './settings.service';
import { NavigationEnd, Router } from '@angular/router';

export class ChildApp {
  childUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService implements OnDestroy {
  private destroyed$: Subject<void> = new Subject();

  constructor(
    readonly shellCommunicationService: ShellCommunicationService,
    readonly settingsService: SettingsService,
    readonly router: Router
  ) {}

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public ifChildSubscribeToShell(): void {
    if (this.shellCommunicationService.isChild) {
      this.shellCommunicationService.registerToShell();
      this.subscribeToRouterEvents();
      this.subscribeToLanguageChanges();
      this.subscribeToColorSchemeChanges();
      this.subscribeToThemeChanges();
      this.subscribeToLocaleChanges();
    }
  }

  private subscribeToRouterEvents(): void {
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.shellCommunicationService.notifyShellAboutNavigation(location.href);
      }
    });
  }

  private subscribeToLanguageChanges(): void {
    this.shellCommunicationService.language$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((language) => {
        this.settingsService.updateLanguage(language);
      });
  }

  private subscribeToColorSchemeChanges(): void {
    this.shellCommunicationService.colorScheme$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((colorScheme) => {
        this.setColorSchemeProperty(colorScheme);
      });
  }

  private setColorSchemeProperty(colorScheme): void {
    for (const property in colorScheme) {
      if (colorScheme.hasOwnProperty(property)) {
        document.body.style.setProperty(property, colorScheme[property]);
      }
    }
  }

  private subscribeToThemeChanges(): void {
    this.shellCommunicationService.theme$.pipe(takeUntil(this.destroyed$)).subscribe((theme) => {
      this.settingsService.updateTheme(theme);
    });
  }

  private subscribeToLocaleChanges(): void {
    this.shellCommunicationService.locale$.pipe(takeUntil(this.destroyed$)).subscribe((locale) => {
      this.settingsService.updateCountry(locale.country as AvlLocalizationService.Locale);
      this.settingsService.updateDateTimeFormat(
        locale.dateTimeFormat as AvlLocalizationService.Locale
      );
      this.settingsService.updateDecimalSeparator(
        locale.decimalSeparator as AvlLocalizationService.Locale
      );
      this.settingsService.locale$.next();
    });
  }
}
