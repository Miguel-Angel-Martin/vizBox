import { Injectable } from '@angular/core';

import {
  LoggingService,
  LogSeverity,
  ThemeService,
  TranslationManagementService,
} from '@avl-services/ng-services';
import { TranslateService } from '@ngx-translate/core';
import { LoggingConfig } from 'logging.config';
import { BehaviorSubject, Subject } from 'rxjs';

import {
  COUNTRIES,
  LANGUAGES,
  THEMES,
  DATE_TIME_FORMATS,
  DECIMAL_SEPARATORS,
  DECIMAL_SEPARATOR_MAPPINGS,
  DATE_TIME_MAPPINGS,
} from '../../app.consts';

export interface SolutionSettings {
  language: string;
  theme: string;
  country: AvlLocalizationService.Locale;
  globalLogLevel: LogSeverity;
  debounceTime: string;
  capacity: string;
  dateTimeFormat: AvlLocalizationService.Locale;
  decimalSeparator: AvlLocalizationService.Locale;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public locale$: BehaviorSubject<void> = new BehaviorSubject(undefined);

  constructor(
    private translationManagementService: TranslationManagementService,
    private themeService: ThemeService,
    private loggingService: LoggingService,
    private translateService: TranslateService
  ) {}

  public getSettings(): SolutionSettings {
    return {
      language: this.translationManagementService.language,
      country: this.getCountry(),
      theme: this.themeService.getCurrentTheme(),
      globalLogLevel: LoggingConfig.globalLogLevel,
      debounceTime: String(LoggingConfig.debounceTime / 1000),
      capacity: String(LoggingConfig.capacity),
      dateTimeFormat: this.getDateTimeFormat(),
      decimalSeparator: this.getDecimalSeparator(),
    };
  }

  public prepareItem(item: { value: string; label: string }) {
    return {
      label: this.translateService.instant(item.label),
      value: item.value,
    };
  }
  public initLanguages = (): Array<{ label: string; value: string }> => {
    return LANGUAGES.map((item) => this.prepareItem(item));
  };

  public initCountries = (): Array<{ label: string; value: string }> => {
    return COUNTRIES.map((item) => this.prepareItem(item));
  };

  public initDateTimeFormats = (): Array<{ label: string; value: string }> => {
    return [...new Map(DATE_TIME_FORMATS.map((item) => [item.label, item])).values()].map((item) =>
      this.prepareItem(item)
    );
  };

  public initDecimalSeparators = (): Array<{ label: string; value: string }> => {
    return [...new Map(DECIMAL_SEPARATORS.map((item) => [item.label, item])).values()].map((item) =>
      this.prepareItem(item)
    );
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

  public getCountry = (): AvlLocalizationService.Locale => {
    let country = localStorage.getItem('country') as AvlLocalizationService.Locale;

    if (!country || !COUNTRIES.find((item) => item.value === country)) {
      country = COUNTRIES[0].value;
      localStorage.setItem('country', country);
    }
    return country;
  };

  public getDecimalSeparator = (): AvlLocalizationService.Locale => {
    let decimalSeparator = localStorage.getItem(
      'decimalSeparator'
    ) as AvlLocalizationService.Locale;

    if (!decimalSeparator || !DECIMAL_SEPARATORS.find((item) => item.value === decimalSeparator)) {
      decimalSeparator = DECIMAL_SEPARATORS.find(
        (format) => format.label === DECIMAL_SEPARATOR_MAPPINGS[this.getCountry()]
      ).value;
      localStorage.setItem('decimalSeparator', decimalSeparator);
    }
    return decimalSeparator;
  };

  public getDateTimeFormat = (): AvlLocalizationService.Locale => {
    let dateTimeFormat = localStorage.getItem('dateTimeFormat') as AvlLocalizationService.Locale;

    if (!dateTimeFormat || !DATE_TIME_FORMATS.find((item) => item.value === dateTimeFormat)) {
      dateTimeFormat = DATE_TIME_FORMATS.find(
        (format) => format.label === DATE_TIME_MAPPINGS[this.getCountry()]
      ).value;
      localStorage.setItem('dateTimeFormat', dateTimeFormat);
    }
    return dateTimeFormat;
  };

  public updateCountry = (
    country: AvlLocalizationService.Locale
  ): AvlLocalizationService.Locale => {
    const localStorageCountry = localStorage.getItem('country') as AvlLocalizationService.Locale;
    if (country !== localStorageCountry) {
      localStorage.setItem('country', country);
    }
    return country;
  };

  public updateDecimalSeparator = (
    decimalSeparator: AvlLocalizationService.Locale
  ): AvlLocalizationService.Locale => {
    const decimalSeparatorLS = localStorage.getItem(
      'decimalSeparator'
    ) as AvlLocalizationService.Locale;
    if (decimalSeparator !== decimalSeparatorLS) {
      localStorage.setItem('decimalSeparator', decimalSeparator);
    }
    AvlLocalizationService.numberOptions.locale = decimalSeparator;
    return decimalSeparator;
  };

  public updateDateTimeFormat = (
    dateTimeFormat: AvlLocalizationService.Locale
  ): AvlLocalizationService.Locale => {
    const dateTimeFormatLS = localStorage.getItem(
      'dateTimeFormat'
    ) as AvlLocalizationService.Locale;
    if (dateTimeFormat !== dateTimeFormatLS) {
      localStorage.setItem('dateTimeFormat', dateTimeFormat);
    }
    AvlLocalizationService.dateTimeOptions.locale = dateTimeFormat;
    return dateTimeFormat;
  };

  public updateTheme = (theme: string): boolean => {
    return (this.themeService.isDarkTheme = theme === THEMES[0]);
  };

  public onDialogClosed = (
    operation: 'Cancel' | 'Save',
    settings: SolutionSettings
  ): SolutionSettings => {
    if (operation === 'Save') {
      const newSettings = this.updateSettings(settings);
      this.locale$.next();
      return newSettings;
    } else {
      return this.restoreSettings();
    }
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
      dateTimeFormat: this.updateDateTimeFormat(settings.dateTimeFormat),
      decimalSeparator: this.updateDecimalSeparator(settings.decimalSeparator),
    };
  }

  private restoreSettings(): SolutionSettings {
    return {
      country: localStorage.getItem('country') as AvlLocalizationService.Locale,
      theme: this.themeService.isDarkTheme ? THEMES[0] : THEMES[1],
      language: this.translationManagementService.language,
      globalLogLevel: LoggingConfig.globalLogLevel,
      debounceTime: String(LoggingConfig.debounceTime / 1000),
      capacity: String(LoggingConfig.capacity),
      dateTimeFormat: localStorage.getItem('dateTimeFormat') as AvlLocalizationService.Locale,
      decimalSeparator: localStorage.getItem('decimalSeparator') as AvlLocalizationService.Locale,
    };
  }

  public updateLocalizationService(): void {
    AvlLocalizationService.locale = this.getCountry();
    AvlLocalizationService.dateTimeOptions.locale = this.getDateTimeFormat();
    AvlLocalizationService.numberOptions.locale = this.getDecimalSeparator();
  }
}
