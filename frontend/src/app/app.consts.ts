import {
  AvlOverflowMenuGroup,
  AvlOverflowMenuItem,
} from '@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.api';
import { AvlAboutDialogInfo } from '@avl-ng-controls/dialog';

export const USER_MENU_ITEM: AvlOverflowMenuItem = {
  label: '',
  icon: 'account-box',
  sublabel: 'VizBoxStarterKit.Monitor',
};

export const UNKNOWN_USER_MENU_ITEM: AvlOverflowMenuItem = {
  label: 'VizBoxStarterKit.Unknown',
  icon: 'account-box',
  sublabel: 'VizBoxStarterKit.Unknown',
};

export const LOGIN_MENU_ITEM: AvlOverflowMenuItem = {
  label: 'VizBoxStarterKit.Login',
  action: 'login',
  icon: 'loginLogoutIcons:login',
};

export const LOGOUT_MENU_ITEM: AvlOverflowMenuItem = {
  label: 'VizBoxStarterKit.Logout',
  action: 'logout',
  icon: 'loginLogoutIcons:logout',
};

export const CONSTANT_MENU_ITEMS: AvlOverflowMenuItem[] = [
  {
    label: 'VizBoxStarterKit.Messages',
    icon: 'communication:message',
    badgeValue: '4',
  },
  {
    label: 'VizBoxStarterKit.Settings',
    icon: 'settings',
    action: 'settings',
  },
  {
    label: 'VizBoxStarterKit.Help',
    icon: 'help',
  },
  {
    label: 'VizBoxStarterKit.About',
    icon: 'info-outline',
    action: 'about',
  },
];

export const MENU: AvlOverflowMenuGroup[] = [
  {
    items: [UNKNOWN_USER_MENU_ITEM],
  },
  {
    items: CONSTANT_MENU_ITEMS,
  },
  {
    items: [LOGIN_MENU_ITEM],
  },
];

export enum DateTimeFormats {
  German = 'DD.MM.YYYY hh:mm:ss',
  American = 'MM/DD/YYYY hh:mm:ss P',
  British = 'DD/MM/YYYY hh:mm:ss'
}

export enum DecimalSeparators {
  German = 'comma (,) e.g. 1000,123',
  American = 'dot (.) e.g. 1000.123',
}

export enum Countries {
  German = 'de-DE',
  American = 'en-US',
  British = 'en-GB',
  Netherlands = 'nl-NL',
  Austrian = 'de-AT'
}

export const COUNTRIES: Array<{ value: AvlLocalizationService.Locale, label: string }>  = [
  {
    label: 'VizBoxStarterKit.UnitedKingdom',
    value: Countries.British,
  },
  {
    label: 'VizBoxStarterKit.UnitedStates',
    value: Countries.American,
  },
  {
    label: 'VizBoxStarterKit.Germany',
    value: Countries.German,
  },
];

export const LANGUAGES = [
  {
    value: 'en',
    label: 'VizBoxStarterKit.English',
  },
  {
    value: 'hr',
    label: 'VizBoxStarterKit.Croatian',
  },
];

export const DATE_TIME_MAPPINGS: { [key in AvlLocalizationService.Locale]: string } = {
    [Countries.German]: DateTimeFormats.German,
    [Countries.American]: DateTimeFormats.American,
    [Countries.British]: DateTimeFormats.British,
    [Countries.Netherlands]: DateTimeFormats.British,
    [Countries.Austrian]: DateTimeFormats.German,
}

export const DECIMAL_SEPARATOR_MAPPINGS: { [key in AvlLocalizationService.Locale]: string } = {
  [Countries.German]: DecimalSeparators.German,
  [Countries.American]: DecimalSeparators.American,
  [Countries.British]: DecimalSeparators.American,
  [Countries.Netherlands]: DecimalSeparators.American,
  [Countries.Austrian]: DecimalSeparators.German,
}

export const DATE_TIME_FORMATS: Array<{ value: AvlLocalizationService.Locale, label: string }> = [
  {
    value: Countries.British,
    label: DateTimeFormats.British,
  },
  {
    value: Countries.American,
    label: DateTimeFormats.American,
  },
  {
    value: Countries.German,
    label: DateTimeFormats.German,
  }
];

export const DECIMAL_SEPARATORS: Array<{ value: AvlLocalizationService.Locale, label: string }> = [
  {
    value: Countries.British,
    label: DecimalSeparators.American,
  },
  {
    value: Countries.German,
    label: DecimalSeparators.German,
  },
];

export const AVL_DIALOG_INFO: AvlAboutDialogInfo = {
  productLogo: 'assets/images/vizbox-logo.svg',
  productName: 'VizBoxStarterKit.ProductName',
  brandPromise: 'VizBoxStarterKit.BrandPromise',
  versionInfo: [
    { label: 'VizBoxStarterKit.VersionNumber', value: '1.0.0' },
    { label: 'VizBoxStarterKit.BuildNumber', value: '1345' },
    { label: 'VizBoxStarterKit.BuildDate', value: '2021-01-11' },
  ],
  legalText: 'VizBoxStarterKit.LegalText',
  additionalInfoLabel: 'VizBoxStarterKit.AdditionalInfoLabel',
  additionalInfoUrl: 'assets/licenses/licenses-summary.txt',
  okButtonLabel: 'VizBoxStarterKit.OkButtonLabel',
};

export const THEMES = ['dark', 'light'];

export const HOME_PAGE_URL = '/';
export const ICON = 'device:brightness-high';
