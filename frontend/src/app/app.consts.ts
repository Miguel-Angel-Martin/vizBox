import {
  AvlOverflowMenuGroup,
  AvlOverflowMenuItem,
} from '@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.api';

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
    items: [LOGIN_MENU_ITEM]
  }
];

export const COUNTRIES = [
  {
    label: 'Croatia',
    value: 'hr',
  },
  {
    label: 'United Kingdom',
    value: 'uk',
  },
  {
    label: 'United States',
    value: 'us',
  },
];

export const AVL_DIALOG_INFO = {
  logoSrc: 'assets/images/vizbox-logo.svg',
  productName: 'Starter kit vizbox application™',
  versionInfo: [
    { label: 'Version number', value: '1.0.0' },
    { label: 'Build number', value: '1345' },
    { label: 'Build date', value: '2021-01-11' },
  ],
  legalText:
    'This program incorporates parts from other organizations which are distributed under software licences of their choosing.',
  additionalInfoLabel: 'Additional version and copyright information.',
  additionalInfoUrl: 'assets/licenses/licenses-summary.txt',
  copyright: '© AVL List GmbH 2021. All rights reserved.',
};

export const THEMES = ['dark', 'light'];

export const HOME_PAGE_URL = '/';
export const ICON = 'device:brightness-high';
