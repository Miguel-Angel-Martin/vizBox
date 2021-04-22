import { Injectable } from '@angular/core';

import {
  LoggingService,
  LogSeverity,
  ThemeService,
  TranslationManagementService,
} from '@avl-services/ng-services';
import { LoggingConfig } from 'logging.config';

import { COUNTRIES, THEMES } from '../../app.consts';

export interface SolutionSettings {
  language: string;
  theme: string;
  country: string;
  globalLogLevel: LogSeverity;
  debounceTime: string;
  capacity: string;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private translationManagementService: TranslationManagementService,
    private themeService: ThemeService,
    private loggingService: LoggingService
  ) {}

  public getSettings(): SolutionSettings {
    return {
      language: this.translationManagementService.language,
      country: this.getCountry(),
      theme: this.themeService.getCurrentTheme(),
      globalLogLevel: LoggingConfig.globalLogLevel,
      debounceTime: String(LoggingConfig.debounceTime / 1000),
      capacity: String(LoggingConfig.capacity),
    };
  }
  public initLanguages = (): Array<{ label: string; value: string }> => {
    return this.translationManagementService.languages.map((item) => {
      return { label: item.label, value: item.code };
    });
  };

  public initLogLevelOptions = (): Array<{ label: string; value: string }> => {
    return Object.keys(LogSeverity)
      .filter((key) => isNaN(+key))
      .map((key) => ({ label: key, value: LogSeverity[key] }));
  };

  public updateLanguage = (language: string): string => {
    if (language !== this.translationManagementService.language) {
      this.translationManagementService.changeLanguage(language); // service also sets localStorage for lang
    }
    return language;
  };

  public getCountry = (): string => {
    let country = localStorage.getItem('country');

    if (!country || !COUNTRIES.find((item) => item.value === country)) {
      country = COUNTRIES[0].value;
      localStorage.setItem('country', country);
    }
    return country;
  };

  public updateCountry = (country: string): string => {
    const localStorageCountry = localStorage.getItem('country');
    if (country !== localStorageCountry) {
      localStorage.setItem('country', country);
    }
    return country;
  };

  public updateTheme = (theme: string): boolean => {
    return (this.themeService.isDarkTheme = theme === THEMES[0]);
  };

  public onDialogClosed = (
    operation: 'Cancel' | 'Save',
    settings: SolutionSettings
  ): SolutionSettings => {
    return operation === 'Save' ? this.updateSettings(settings) : this.restoreSettings();
  };

  public updateLogLevel = (globalLogLevel: LogSeverity): LogSeverity => {
    if (globalLogLevel !== LoggingConfig.globalLogLevel) {
      this.loggingService.setGlobalLogLevel(globalLogLevel);
      return globalLogLevel;
    }
    return LoggingConfig.globalLogLevel;
  };

  public updateDebounceTime = (debounceTime: number): number => {
    if (debounceTime * 1000 !== LoggingConfig.debounceTime) {
      this.loggingService.setLoggingDebounceTime(debounceTime * 1000);
      return debounceTime;
    }
    return LoggingConfig.debounceTime / 1000;
  };

  public updateCapacity = (capacity: number): number => {
    if (capacity !== LoggingConfig.capacity) {
      this.loggingService.setLogCapacity(capacity);
      return capacity;

    }
    return LoggingConfig.capacity;
  };

  private updateSettings(settings: SolutionSettings): SolutionSettings {
    return {
      country: this.updateCountry(settings.country),
      theme: this.updateTheme(settings.theme) ? THEMES[0] : THEMES[1],
      language: this.updateLanguage(settings.language),
      globalLogLevel: this.updateLogLevel(settings.globalLogLevel),
      debounceTime: String(this.updateDebounceTime(Number(settings.debounceTime))),
      capacity: String(this.updateCapacity(Number(settings.capacity))),
    };
  }

  private restoreSettings(): SolutionSettings {
    return {
      country: localStorage.getItem('country'),
      theme: this.themeService.isDarkTheme ? THEMES[0] : THEMES[1],
      language: this.translationManagementService.language,
      globalLogLevel: LoggingConfig.globalLogLevel,
      debounceTime: String(LoggingConfig.debounceTime / 1000),
      capacity: String(LoggingConfig.capacity),
    };
  }
}
