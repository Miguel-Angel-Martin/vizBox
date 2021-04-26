(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<avl-app-layout>\r\n  <avl-app-bar *ngIf=\"!isChild\" [homePageUrl]=\"homePageUrl\" slot=\"toolbar\" [fixed]=\"true\"\r\n    [(currentApplication)]=\"currentApp\">\r\n\r\n    <avl-overflow-menu slot=\"menu\" [items]=\"menuItems\" (itemClicked)=\"overflowMenuClicked($event)\">\r\n      <avl-icon-button icon=\"more-vert\" slot=\"trigger\"></avl-icon-button>\r\n    </avl-overflow-menu>\r\n  </avl-app-bar>\r\n\r\n  <avl-side-nav slot=\"left-side\" [menuItems]=\"sideNavItems\"></avl-side-nav>\r\n  <div *ngIf=\"showLoader\" class=\"loadingProgressContainer\">\r\n    <div class=\"loader\"></div>\r\n    <div>Loading, please wait...</div>\r\n  </div>\r\n  <router-outlet (activate)=\"onActivate()\"></router-outlet>\r\n</avl-app-layout>\r\n\r\n<avl-dialog *ngIf=\"!isChild\" id=\"settingsDialog\" [(open)]=\"isSettingsDialogOpen\" [closeOnScrimClick]=\"false\">\r\n\r\n  <ng-template #content>\r\n    <avl-dialog-header>Settings</avl-dialog-header>\r\n    <avl-dialog-content>\r\n      <p>Theme</p>\r\n      <avl-radio-group id=\"theme\" [(selectedValue)]=\"settings.theme\">\r\n        <avl-radio-button name=\"light\">Light</avl-radio-button>\r\n        <avl-radio-button name=\"dark\">Dark</avl-radio-button>\r\n      </avl-radio-group> <br />\r\n\r\n      <avl-dropdown id=\"countryDropdown\" label=\"Country\" [items]=\"countries\" [(selectedValue)]=\"settings.country\"\r\n        compact-mode></avl-dropdown><br />\r\n      <avl-dropdown id=\"languageDropdown\" label=\"Language\" [items]=\"languages\" [(selectedValue)]=\"settings.language\">\r\n      </avl-dropdown><br />\r\n      \r\n      <avl-list-expander [narrow]=\"true\">\r\n        <div role=\"header\">\r\n            <label>Logging</label>\r\n        </div>\r\n        <div role=\"content\">\r\n          <avl-dropdown id=\"logLevelDropdown\" [items]=\"logLevelOptions\" label=\"Log Level\" [(selectedIndex)]=\"settings.globalLogLevel\" compact-mode></avl-dropdown> <br />\r\n          <avl-textfield label=\"Log debounce time (s)\" [(value)]=\"settings.debounceTime\" compact-mode></avl-textfield>\r\n          <avl-textfield label=\"Log capacity\" [(value)]=\"settings.capacity\" compact-mode></avl-textfield>\r\n        </div>\r\n    </avl-list-expander>\r\n    </avl-dialog-content>\r\n\r\n    <avl-dialog-footer>\r\n      <avl-button (click)=\"closeDialog('Save')\">Save</avl-button>\r\n      <avl-button (click)=\"closeDialog('Cancel')\">Cancel</avl-button>\r\n    </avl-dialog-footer>\r\n  </ng-template>\r\n</avl-dialog>\r\n\r\n<avl-about-dialog\r\n  [(open)]=\"isAboutDialogOpen\"\r\n  [productLogo]=\"AVLDialogInfo.logoSrc\"\r\n  [productName]=\"AVLDialogInfo.productName\"\r\n  [brandPromise]=\"AVLDialogInfo.brandPromise\"\r\n  [versionInfo]=\"AVLDialogInfo.versionInfo\"\r\n  [legalText]=\"AVLDialogInfo.legalText\"\r\n  [additionalInfoLabel]=\"AVLDialogInfo.additionalInfoLabel\"\r\n  [additionalInfoUrl]=\"AVLDialogInfo.additionalInfoUrl\"\r\n  [copyright]=\"AVLDialogInfo.copyright\"\r\n>\r\n</avl-about-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error-page/error-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error-page/error-page.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ errorMessage }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>\r\n  Page Not Found\r\n</h2>\r\n<p>The page you were looking for doesn't exist.</p>\r\n  ");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/components/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const appRoutes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | app-components-home-home-module */ "app-components-home-home-module").then(__webpack_require__.bind(null, /*! app/components/home/home.module */ "./src/app/components/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: 'intro',
        loadChildren: () => __webpack_require__.e(/*! import() | app-components-intro-intro-module */ "app-components-intro-intro-module").then(__webpack_require__.bind(null, /*! app/components/intro/intro.module */ "./src/app/components/intro/intro.module.ts")).then(m => m.IntroModule),
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | app-components-about-about-module */ "app-components-about-about-module").then(__webpack_require__.bind(null, /*! app/components/about/about.module */ "./src/app/components/about/about.module.ts")).then(m => m.AboutModule)
    },
    {
        path: 'logging-demo',
        loadChildren: () => __webpack_require__.e(/*! import() | app-components-logging-demo-logging-demo-module */ "app-components-logging-demo-logging-demo-module").then(__webpack_require__.bind(null, /*! app/components/logging-demo/logging-demo.module */ "./src/app/components/logging-demo/logging-demo.module.ts")).then(m => m.LoggingDemoModule)
    },
    { path: 'error-page', component: _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("avl-app-layout {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: block;\r\n}\r\n\r\n.no-bullet {\r\n  list-style: none;\r\n}\r\n\r\n.toolbarThemeIcon{\r\n  --avl-icon-button-color: var(--avl-app-bar-item-color, #fff);\r\n}\r\n\r\navl-overflow-menu avl-icon-button {\r\n  --avl-icon-button-color: var(--avl-on-primary-color);\r\n}\r\n\r\navl-dropdown{\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF2bC1hcHAtbGF5b3V0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubm8tYnVsbGV0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi50b29sYmFyVGhlbWVJY29ue1xyXG4gIC0tYXZsLWljb24tYnV0dG9uLWNvbG9yOiB2YXIoLS1hdmwtYXBwLWJhci1pdGVtLWNvbG9yLCAjZmZmKTtcclxufVxyXG5cclxuYXZsLW92ZXJmbG93LW1lbnUgYXZsLWljb24tYnV0dG9uIHtcclxuICAtLWF2bC1pY29uLWJ1dHRvbi1jb2xvcjogdmFyKC0tYXZsLW9uLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5hdmwtZHJvcGRvd257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _avl_ng_controls_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @avl-ng-controls/navigation */ "./node_modules/@avl-ng-controls/navigation/__ivy_ngcc__/fesm2015/avl-ng-controls-navigation.js");
/* harmony import */ var _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-ng-controls/auth */ "./node_modules/@avl-ng-controls/auth/__ivy_ngcc__/fesm2015/avl-ng-controls-auth.js");
/* harmony import */ var _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @avl-services/ng-services */ "./node_modules/@avl-services/ng-services/__ivy_ngcc__/fesm2015/avl-services-ng-services.js");
/* harmony import */ var _avl_controls_core_dist_avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @avl-controls/core/dist/avl-icon/avl-icon */ "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");
/* harmony import */ var _avl_controls_core_dist_avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @avl-controls/core/dist/avl-icon-button/avl-icon-button */ "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js");
/* harmony import */ var _avl_controls_core_dist_avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu */ "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");
/* harmony import */ var _avl_controls_core_dist_avl_radio_group_avl_radio_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @avl-controls/core/dist/avl-radio-group/avl-radio-group */ "./node_modules/@avl-controls/core/dist/avl-radio-group/avl-radio-group.js");
/* harmony import */ var _avl_controls_core_dist_avl_radio_button_avl_radio_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @avl-controls/core/dist/avl-radio-button/avl-radio-button */ "./node_modules/@avl-controls/core/dist/avl-radio-button/avl-radio-button.js");
/* harmony import */ var _avl_controls_core_dist_avl_dropdown_avl_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @avl-controls/core/dist/avl-dropdown/avl-dropdown */ "./node_modules/@avl-controls/core/dist/avl-dropdown/avl-dropdown.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.consts */ "./src/app/app.consts.ts");
/* harmony import */ var _core_services_settings_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/settings.service */ "./src/app/core/services/settings.service.ts");
/* harmony import */ var _core_services_overflow_menu_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/services/overflow-menu.service */ "./src/app/core/services/overflow-menu.service.ts");
/* harmony import */ var _core_services_app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/services/app.service */ "./src/app/core/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

















let AppComponent = class AppComponent {
    constructor(authService, translateService, themeService, shellCommunicationService, settingsService, overflowMenuService, appService) {
        this.authService = authService;
        this.translateService = translateService;
        this.themeService = themeService;
        this.shellCommunicationService = shellCommunicationService;
        this.settingsService = settingsService;
        this.overflowMenuService = overflowMenuService;
        this.appService = appService;
        this.icon = _app_consts__WEBPACK_IMPORTED_MODULE_13__["ICON"];
        // App-bar
        this.homePageUrl = _app_consts__WEBPACK_IMPORTED_MODULE_13__["HOME_PAGE_URL"];
        this.currentApp = {
            name: this.translateService.instant('VizBoxStarterKit.Introduction'),
            url: '/home',
            image: 'assets/images/vizbox-logo.svg',
        };
        // Settings Dialog Info
        this.isSettingsDialogOpen = false;
        this.languages = this.settingsService.initLanguages();
        this.countries = _app_consts__WEBPACK_IMPORTED_MODULE_13__["COUNTRIES"];
        this.logLevelOptions = this.settingsService.initLogLevelOptions();
        this.settings = this.settingsService.getSettings();
        this.overflowMenuHandlers = {
            login: () => this.authService.login(),
            logout: () => this.authService.logout(),
            settings: () => (this.isSettingsDialogOpen = true),
            about: () => (this.isAboutDialogOpen = true),
            undefined: () => { },
        };
        this.isChild = this.shellCommunicationService.isChild;
        this.showLoader = true;
        // Side Navigation
        this.sideNavItems = [
            new _avl_ng_controls_navigation__WEBPACK_IMPORTED_MODULE_4__["TopLevelPage"](this.translateService.instant('VizBoxStarterKit.AvlWebStarterKit'), '/intro', 'home'),
            new _avl_ng_controls_navigation__WEBPACK_IMPORTED_MODULE_4__["TopLevelPage"](this.translateService.instant('VizBoxStarterKit.About'), '/about', 'info'),
            new _avl_ng_controls_navigation__WEBPACK_IMPORTED_MODULE_4__["TopLevelPage"](this.translateService.instant('VizBoxStarterKit.LoggingDemo'), '/logging-demo', 'icons:list'),
        ];
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // About Dialog Info
        this.isAboutDialogOpen = false;
        this.AVLDialogInfo = _app_consts__WEBPACK_IMPORTED_MODULE_13__["AVL_DIALOG_INFO"];
        // Subscription to Shell
        this.appService.ifChildSubscribeToShell();
    }
    ngOnInit() {
        this.menuItems = this.overflowMenuService.translateMenu(_app_consts__WEBPACK_IMPORTED_MODULE_13__["MENU"]);
        this.authService.user$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
            .subscribe((user) => (this.menuItems = this.overflowMenuService.translateDependingOnUser(user)));
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    overflowMenuClicked(item) {
        this.overflowMenuHandlers[item.action]();
    }
    onActivate() {
        this.showLoader = false;
    }
    closeDialog(operation) {
        this.settings = this.settingsService.onDialogClosed(operation, this.settings);
        this.themeService.isDarkTheme = this.settings.theme === _app_consts__WEBPACK_IMPORTED_MODULE_13__["THEMES"][0];
        this.isSettingsDialogOpen = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__["AvlAuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] },
    { type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_6__["ShellCommunicationService"] },
    { type: _core_services_settings_service__WEBPACK_IMPORTED_MODULE_14__["SettingsService"] },
    { type: _core_services_overflow_menu_service__WEBPACK_IMPORTED_MODULE_15__["OverflowMenuService"] },
    { type: _core_services_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'viz-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    __metadata("design:paramtypes", [_avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__["AvlAuthService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_6__["ThemeService"],
        _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_6__["ShellCommunicationService"],
        _core_services_settings_service__WEBPACK_IMPORTED_MODULE_14__["SettingsService"],
        _core_services_overflow_menu_service__WEBPACK_IMPORTED_MODULE_15__["OverflowMenuService"],
        _core_services_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.consts.ts":
/*!*******************************!*\
  !*** ./src/app/app.consts.ts ***!
  \*******************************/
/*! exports provided: USER_MENU_ITEM, UNKNOWN_USER_MENU_ITEM, LOGIN_MENU_ITEM, LOGOUT_MENU_ITEM, CONSTANT_MENU_ITEMS, MENU, COUNTRIES, AVL_DIALOG_INFO, THEMES, HOME_PAGE_URL, ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_MENU_ITEM", function() { return USER_MENU_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_USER_MENU_ITEM", function() { return UNKNOWN_USER_MENU_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MENU_ITEM", function() { return LOGIN_MENU_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_MENU_ITEM", function() { return LOGOUT_MENU_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT_MENU_ITEMS", function() { return CONSTANT_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVL_DIALOG_INFO", function() { return AVL_DIALOG_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEMES", function() { return THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_URL", function() { return HOME_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON", function() { return ICON; });
const USER_MENU_ITEM = {
    label: '',
    icon: 'account-box',
    sublabel: 'VizBoxStarterKit.Monitor',
};
const UNKNOWN_USER_MENU_ITEM = {
    label: 'VizBoxStarterKit.Unknown',
    icon: 'account-box',
    sublabel: 'VizBoxStarterKit.Unknown',
};
const LOGIN_MENU_ITEM = {
    label: 'VizBoxStarterKit.Login',
    action: 'login',
    icon: 'social:person',
};
const LOGOUT_MENU_ITEM = {
    label: 'VizBoxStarterKit.Logout',
    action: 'logout',
    icon: 'exit-to-app',
};
const CONSTANT_MENU_ITEMS = [
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
        icon: 'info',
        action: 'about',
    },
];
const MENU = [
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
const COUNTRIES = [
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
const AVL_DIALOG_INFO = {
    logoSrc: 'assets/images/vizbox-logo.svg',
    productName: 'Starter kit vizbox application™',
    brandPromise: 'Make vizbox great again',
    versionInfo: [
        { label: 'Version number', value: '1.0.0' },
        { label: 'Build number', value: '1345' },
        { label: 'Build date', value: '2021-01-11' },
    ],
    legalText: 'This program incorporates parts from other organizations which are distributed under software licences of their choosing.',
    additionalInfoLabel: 'Additional version and copyright information.',
    additionalInfoUrl: 'assets/licenses/licenses-summary.txt',
    copyright: '© AVL List GmbH 2021. All rights reserved.',
};
const THEMES = ['dark', 'light'];
const HOME_PAGE_URL = '/';
const ICON = 'device:brightness-high';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @avl-ng-controls/auth */ "./node_modules/@avl-ng-controls/auth/__ivy_ngcc__/fesm2015/avl-ng-controls-auth.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-translate-multi-http-loader */ "./node_modules/ngx-translate-multi-http-loader/__ivy_ngcc__/fesm2015/ngx-translate-multi-http-loader.js");
/* harmony import */ var _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @avl-controls/ng-binders */ "./node_modules/@avl-controls/ng-binders/__ivy_ngcc__/fesm2015/avl-controls-ng-binders.js");
/* harmony import */ var _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @avl-services/ng-services */ "./node_modules/@avl-services/ng-services/__ivy_ngcc__/fesm2015/avl-services-ng-services.js");
/* harmony import */ var endpoint_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! endpoint.config */ "./src/endpoint.config.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _pet_store_api_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pet-store/api.module */ "./src/pet-store/api.module.ts");
/* harmony import */ var _pet_store_variables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pet-store/variables */ "./src/pet-store/variables.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/components/error-page/error-page.component.ts");
/* harmony import */ var logging_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! logging.config */ "./src/logging.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















function HttpLoaderFactory(http) {
    return new ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_6__["MultiTranslateHttpLoader"](http, [
        { prefix: 'assets/i18n/avl-controls-core.', suffix: '.json' },
        { prefix: 'assets/i18n/avl-controls-datatable.', suffix: '.json' },
        { prefix: 'assets/i18n/vizbox-starter-kit.', suffix: '.json' },
    ]);
}
let AppModule = class AppModule {
    constructor() { }
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
            _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_17__["ErrorPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_8__["LoggingModule"].forRoot(logging_config__WEBPACK_IMPORTED_MODULE_18__["LoggingConfig"]),
            _pet_store_api_module__WEBPACK_IMPORTED_MODULE_14__["ApiModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        ],
        providers: [
            _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_8__["ThemeService"],
            { provide: _pet_store_variables__WEBPACK_IMPORTED_MODULE_15__["BASE_PATH"], useValue: endpoint_config__WEBPACK_IMPORTED_MODULE_9__["basePath"] },
            { provide: _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_4__["INTERCEPTOR_BASE_PATHS"], useValue: [endpoint_config__WEBPACK_IMPORTED_MODULE_9__["basePath"]] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_4__["AvlTokenInterceptor"], multi: true },
            _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_7__["NgxTranslateTranslationService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                useFactory: (translationManagementService) => translationManagementService.initializeTranslations(),
                multi: true,
                deps: [_avl_services_ng_services__WEBPACK_IMPORTED_MODULE_8__["TranslationManagementService"]]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);



/***/ }),

/***/ "./src/app/components/error-page/error-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/error-page/error-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ErrorPageComponent = class ErrorPageComponent {
    constructor(router) {
        this.router = router;
        this.errorMessage = 'Something went wrong. Please check your route.';
        this.getErrorMessage = () => {
            const state = this.router.getCurrentNavigation().extras.state;
            return (state === null || state === void 0 ? void 0 : state.errorMessage) || this.errorMessage;
        };
    }
    ngOnInit() {
        this.errorMessage = this.getErrorMessage();
    }
};
ErrorPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ErrorPageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'viz-error-page',
        template: __importDefault(__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error-page/error-page.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./error-page.component.css */ "./src/app/components/error-page/error-page.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], ErrorPageComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'viz-page-not-found',
        template: __importDefault(__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _guards_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/module-import-guard */ "./src/app/core/guards/module-import-guard.ts");
/* harmony import */ var _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-ng-controls/auth */ "./node_modules/@avl-ng-controls/auth/__ivy_ngcc__/fesm2015/avl-ng-controls-auth.js");
/* harmony import */ var _endpoint_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../endpoint.config */ "./src/endpoint.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
CoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        providers: [
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
            { provide: _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__["AvlAuthService"], useClass: _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__["AvlOidcCodeAuthService"] },
            { provide: _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__["AUTH_CONFIG"], useValue: _endpoint_config__WEBPACK_IMPORTED_MODULE_6__["authConfig"] }
        ],
        declarations: [],
        exports: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-ng-controls/auth */ "./node_modules/@avl-ng-controls/auth/__ivy_ngcc__/fesm2015/avl-ng-controls-auth.js");
/* harmony import */ var _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @avl-services/ng-services */ "./node_modules/@avl-services/ng-services/__ivy_ngcc__/fesm2015/avl-services-ng-services.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Guard for the routes on which you have to be logged in to view.
 */
let AuthGuard = class AuthGuard {
    constructor(authService, location, router, shellCommunicationService) {
        this.authService = authService;
        this.location = location;
        this.router = router;
        this.shellCommunicationService = shellCommunicationService;
        this.handleRedirectedFromLogin = (isRedirected, redirectUrl) => {
            if (isRedirected === false) {
                this.shellCommunicationService.notifyShellAboutLogin(redirectUrl);
            }
            return isRedirected;
        };
    }
    canActivate(_, state) {
        return this.checkLogin(state.url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    canLoad(route) {
        return this.checkLogin(route.path);
    }
    checkLogin(path) {
        const redirectUrl = location.origin + this.location.prepareExternalUrl(path);
        if (this.shellCommunicationService.isChild) {
            return this.childAppLogin$(redirectUrl);
        }
        return this.standaloneAppLogin$(redirectUrl);
    }
    standaloneAppLogin$(redirectUrl) {
        return this.authService.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((isLoggedIn) => isLoggedIn || this.checkErrorMessage(redirectUrl)));
    }
    checkErrorMessage(redirectUrl) {
        if (this.authService.errorMessage) {
            this.redirectToErrorPage();
        }
        else {
            this.authService.login(redirectUrl);
        }
    }
    redirectToErrorPage() {
        const routerState = { errorMessage: this.authService.errorMessage };
        this.router.navigateByUrl('/error-page', { state: routerState }).then((_) => {
            this.authService.clearErrorMessage();
        });
    }
    // Subscription on redirectedFromLogin, if it wasn't redirected, notifies shell about login.
    // If it was redirected waits for the user object. Resolves to true if both subscriptions resolves to true.
    childAppLogin$(redirectUrl) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.shellCommunicationService.redirectedFromLogIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((redirectedFromLogIn) => this.handleRedirectedFromLogin(redirectedFromLogIn, redirectUrl))), this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skipWhile"])((user) => user === undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => Boolean(user)))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([_, userExists]) => userExists));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__["AvlAuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_6__["ShellCommunicationService"] }
];
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_avl_ng_controls_auth__WEBPACK_IMPORTED_MODULE_5__["AvlAuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_6__["ShellCommunicationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/core/guards/module-import-guard.ts":
/*!****************************************************!*\
  !*** ./src/app/core/guards/module-import-guard.ts ***!
  \****************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/core/services/app.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/app.service.ts ***!
  \**********************************************/
/*! exports provided: ChildApp, AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildApp", function() { return ChildApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @avl-services/ng-services */ "./node_modules/@avl-services/ng-services/__ivy_ngcc__/fesm2015/avl-services-ng-services.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.service */ "./src/app/core/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






class ChildApp {
}
let AppService = class AppService {
    constructor(shellCommunicationService, settingsService, router) {
        this.shellCommunicationService = shellCommunicationService;
        this.settingsService = settingsService;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    ifChildSubscribeToShell() {
        if (this.shellCommunicationService.isChild) {
            this.shellCommunicationService.registerToShell();
            this.subscribeToRouterEvents();
            this.subscribeToLanguageChanges();
            this.subscribeToColorSchemeChanges();
            this.subscribeToThemeChanges();
            this.subscribeToLocaleChanges();
        }
    }
    subscribeToRouterEvents() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.shellCommunicationService.notifyShellAboutNavigation(location.href);
            }
        });
    }
    subscribeToLanguageChanges() {
        this.shellCommunicationService.language$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
            .subscribe((language) => {
            this.settingsService.updateLanguage(language);
        });
    }
    subscribeToColorSchemeChanges() {
        this.shellCommunicationService.colorScheme$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
            .subscribe((colorScheme) => {
            this.setColorSchemeProperty(colorScheme);
        });
    }
    setColorSchemeProperty(colorScheme) {
        for (const property in colorScheme) {
            if (colorScheme.hasOwnProperty(property)) {
                document.body.style.setProperty(property, colorScheme[property]);
            }
        }
    }
    subscribeToThemeChanges() {
        this.shellCommunicationService.theme$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((theme) => {
            this.settingsService.updateTheme(theme);
        });
    }
    subscribeToLocaleChanges() {
        this.shellCommunicationService.locale$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((country) => {
            this.settingsService.updateCountry(country);
        });
    }
};
AppService.ctorParameters = () => [
    { type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_3__["ShellCommunicationService"] },
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AppService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [_avl_services_ng_services__WEBPACK_IMPORTED_MODULE_3__["ShellCommunicationService"],
        _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AppService);



/***/ }),

/***/ "./src/app/core/services/overflow-menu.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/overflow-menu.service.ts ***!
  \********************************************************/
/*! exports provided: OverflowMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuService", function() { return OverflowMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.consts */ "./src/app/app.consts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let OverflowMenuService = class OverflowMenuService {
    constructor(translateService) {
        this.translateService = translateService;
    }
    // TRANSLATIONS
    translateMenu(menu) {
        return menu.map((group) => this.translateMenuGroup(group));
    }
    translateMenuGroup(group) {
        return { items: group.items.map((item) => this.translateMenuItem(item)) };
    }
    translateMenuItem(item) {
        return Object.assign(Object.assign({}, item), { label: this.translateService.instant(item.label), sublabel: item.sublabel ? this.translateService.instant(item.sublabel) : null });
    }
    translateDependingOnUser(user) {
        let userMenuItem = _app_consts__WEBPACK_IMPORTED_MODULE_2__["UNKNOWN_USER_MENU_ITEM"];
        if (user) {
            userMenuItem = Object.assign(Object.assign({}, userMenuItem), { label: user.name || user.username });
        }
        const authMenuItem = user ? _app_consts__WEBPACK_IMPORTED_MODULE_2__["LOGOUT_MENU_ITEM"] : _app_consts__WEBPACK_IMPORTED_MODULE_2__["LOGIN_MENU_ITEM"];
        return [
            { items: [this.translateMenuItem(userMenuItem)] },
            { items: _app_consts__WEBPACK_IMPORTED_MODULE_2__["CONSTANT_MENU_ITEMS"].map((item) => this.translateMenuItem(item)) },
            { items: [this.translateMenuItem(authMenuItem)] },
        ];
    }
};
OverflowMenuService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
OverflowMenuService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
], OverflowMenuService);



/***/ }),

/***/ "./src/app/core/services/settings.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/settings.service.ts ***!
  \***************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @avl-services/ng-services */ "./node_modules/@avl-services/ng-services/__ivy_ngcc__/fesm2015/avl-services-ng-services.js");
/* harmony import */ var logging_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! logging.config */ "./src/logging.config.ts");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.consts */ "./src/app/app.consts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SettingsService = class SettingsService {
    constructor(translationManagementService, themeService, loggingService) {
        this.translationManagementService = translationManagementService;
        this.themeService = themeService;
        this.loggingService = loggingService;
        this.initLanguages = () => {
            return this.translationManagementService.languages.map((item) => {
                return { label: item.label, value: item.code };
            });
        };
        this.initLogLevelOptions = () => {
            return Object.keys(_avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["LogSeverity"])
                .filter((key) => isNaN(+key))
                .map((key) => ({ label: key, value: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["LogSeverity"][key] }));
        };
        this.updateLanguage = (language) => {
            if (language !== this.translationManagementService.language) {
                this.translationManagementService.changeLanguage(language); // service also sets localStorage for lang
            }
            return language;
        };
        this.getCountry = () => {
            let country = localStorage.getItem('country');
            if (!country || !_app_consts__WEBPACK_IMPORTED_MODULE_3__["COUNTRIES"].find((item) => item.value === country)) {
                country = _app_consts__WEBPACK_IMPORTED_MODULE_3__["COUNTRIES"][0].value;
                localStorage.setItem('country', country);
            }
            return country;
        };
        this.updateCountry = (country) => {
            const localStorageCountry = localStorage.getItem('country');
            if (country !== localStorageCountry) {
                localStorage.setItem('country', country);
            }
            return country;
        };
        this.updateTheme = (theme) => {
            return (this.themeService.isDarkTheme = theme === _app_consts__WEBPACK_IMPORTED_MODULE_3__["THEMES"][0]);
        };
        this.onDialogClosed = (operation, settings) => {
            return operation === 'Save' ? this.updateSettings(settings) : this.restoreSettings();
        };
        this.updateLogLevel = (globalLogLevel) => {
            if (globalLogLevel !== logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].globalLogLevel) {
                this.loggingService.setGlobalLogLevel(globalLogLevel);
                return globalLogLevel;
            }
            return logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].globalLogLevel;
        };
        this.updateDebounceTime = (debounceTime) => {
            if (debounceTime * 1000 !== logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].debounceTime) {
                this.loggingService.setLoggingDebounceTime(debounceTime * 1000);
                return debounceTime;
            }
            return logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].debounceTime / 1000;
        };
        this.updateCapacity = (capacity) => {
            if (capacity !== logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].capacity) {
                this.loggingService.setLogCapacity(capacity);
                return capacity;
            }
            return logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].capacity;
        };
    }
    getSettings() {
        return {
            language: this.translationManagementService.language,
            country: this.getCountry(),
            theme: this.themeService.getCurrentTheme(),
            globalLogLevel: logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].globalLogLevel,
            debounceTime: String(logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].debounceTime / 1000),
            capacity: String(logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].capacity),
        };
    }
    updateSettings(settings) {
        return {
            country: this.updateCountry(settings.country),
            theme: this.updateTheme(settings.theme) ? _app_consts__WEBPACK_IMPORTED_MODULE_3__["THEMES"][0] : _app_consts__WEBPACK_IMPORTED_MODULE_3__["THEMES"][1],
            language: this.updateLanguage(settings.language),
            globalLogLevel: this.updateLogLevel(settings.globalLogLevel),
            debounceTime: String(this.updateDebounceTime(Number(settings.debounceTime))),
            capacity: String(this.updateCapacity(Number(settings.capacity))),
        };
    }
    restoreSettings() {
        return {
            country: localStorage.getItem('country'),
            theme: this.themeService.isDarkTheme ? _app_consts__WEBPACK_IMPORTED_MODULE_3__["THEMES"][0] : _app_consts__WEBPACK_IMPORTED_MODULE_3__["THEMES"][1],
            language: this.translationManagementService.language,
            globalLogLevel: logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].globalLogLevel,
            debounceTime: String(logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].debounceTime / 1000),
            capacity: String(logging_config__WEBPACK_IMPORTED_MODULE_2__["LoggingConfig"].capacity),
        };
    }
};
SettingsService.ctorParameters = () => [
    { type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["TranslationManagementService"] },
    { type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] },
    { type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["LoggingService"] }
];
SettingsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [_avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["TranslationManagementService"],
        _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["ThemeService"],
        _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["LoggingService"]])
], SettingsService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @avl-controls/ng-binders */ "./node_modules/@avl-controls/ng-binders/__ivy_ngcc__/fesm2015/avl-controls-ng-binders.js");
/* harmony import */ var _avl_ng_controls_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @avl-ng-controls/dialog */ "./node_modules/@avl-ng-controls/dialog/__ivy_ngcc__/fesm2015/avl-ng-controls-dialog.js");
/* harmony import */ var _avl_ng_controls_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-ng-controls/navigation */ "./node_modules/@avl-ng-controls/navigation/__ivy_ngcc__/fesm2015/avl-ng-controls-navigation.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _avl_ng_controls_dialog__WEBPACK_IMPORTED_MODULE_4__["AvlDialogModule"],
            _avl_ng_controls_navigation__WEBPACK_IMPORTED_MODULE_5__["AvlNavigationModule"],
            _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__["AvlNgBindersModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _avl_ng_controls_dialog__WEBPACK_IMPORTED_MODULE_4__["AvlDialogModule"],
            _avl_ng_controls_navigation__WEBPACK_IMPORTED_MODULE_5__["AvlNavigationModule"],
            _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__["AvlNgBindersModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/endpoint.config.ts":
/*!********************************!*\
  !*** ./src/endpoint.config.ts ***!
  \********************************/
/*! exports provided: basePath, authConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePath", function() { return basePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

// if you want to use local petstore-server use http://localhost:65435
const basePath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl; // 'https://vizbox.avl.com/api';
// export const basePath = 'http://localhost:65435';
const authConfig = {
    tokenUrl: basePath + '/identitybroker-tokens',
    loginUrl: basePath + '/identitybroker-login',
    refreshUrl: basePath + '/identitybroker-tokens/refresh',
    loginUrlParamRedirect: 'redirectUrl',
    loginUrlParamChallenge: 'pkceChallenge',
    loginUrlParamNonce: 'nonce',
    logoutUrl: basePath + '/identitybroker-logout',
    logoutUrlParamIdToken: 'idToken',
    logoutUrlParamRedirect: 'redirectToUrl',
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    apiUrl: window["env"]["apiUrl"] || "default"
};


/***/ }),

/***/ "./src/logging.config.ts":
/*!*******************************!*\
  !*** ./src/logging.config.ts ***!
  \*******************************/
/*! exports provided: LoggingConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingConfig", function() { return LoggingConfig; });
/* harmony import */ var _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @avl-services/ng-services */ "./node_modules/@avl-services/ng-services/__ivy_ngcc__/fesm2015/avl-services-ng-services.js");

const LoggingConfig = new _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_0__["LogConfig"]('https://vizbox.avl.com/api/theia/logs', // endpoint for logging (mandatory)
'StarterKitWebApp', // database name for logs (mandatory)
'StarterKit', // application name (mandatory)
'1.0.0', // application version (mandatory)
true, // autologging, logs automatically when user is logged in (optional)
// default: false (if true requires AvlAuthService in providers)
_avl_services_ng_services__WEBPACK_IMPORTED_MODULE_0__["LogSeverity"].Warning, // minimum message level to log (optional), default value: LogType.Info
10000, // log debounce time in milliseconds (optional), default: 30 000 ms
5 // log capacity (optional), default: 10
);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _avl_vizbox_develop_browser_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @avl-vizbox-develop/browser-support */ "./node_modules/@avl-vizbox-develop/browser-support/index.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
window.addEventListener('load', () => Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]));
if (_avl_vizbox_develop_browser_support__WEBPACK_IMPORTED_MODULE_2__["BrowserDetection"].isOutdatedBrowser()) {
    _avl_vizbox_develop_browser_support__WEBPACK_IMPORTED_MODULE_2__["OutdatedBrowserWarning"].showDialog();
}


/***/ }),

/***/ "./src/pet-store/api.module.ts":
/*!*************************************!*\
  !*** ./src/pet-store/api.module.ts ***!
  \*************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/pet-store/configuration.ts");
/* harmony import */ var _api_petApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/petApi.service */ "./src/pet-store/api/petApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ApiModule_1;





let ApiModule = ApiModule_1 = class ApiModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], useFactory: configurationFactory }]
        };
    }
};
ApiModule.ctorParameters = () => [
    { type: ApiModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
ApiModule = ApiModule_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        declarations: [],
        exports: [],
        providers: [_api_petApi_service__WEBPACK_IMPORTED_MODULE_4__["PetApiService"]]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
    __metadata("design:paramtypes", [ApiModule])
], ApiModule);



/***/ }),

/***/ "./src/pet-store/api/petApi.service.ts":
/*!*********************************************!*\
  !*** ./src/pet-store/api/petApi.service.ts ***!
  \*********************************************/
/*! exports provided: PetApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetApiService", function() { return PetApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/pet-store/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/pet-store/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/pet-store/configuration.ts");
/**
 * Swagger Petstore
 * Swagger Petstore (ASP.NET Core 2.0)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let PetApiService = class PetApiService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://localhost/v2';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath + '/v2';
            ;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    addPet(body, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/pets`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    deletePet(petId, observe = 'body', reportProgress = false) {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling deletePet.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.delete(`${this.basePath}/pets/${encodeURIComponent(String(petId))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getPetById(petId, observe = 'body', reportProgress = false) {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling getPetById.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/pets/${encodeURIComponent(String(petId))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getPets(name, status, tags, offset, limit, sortBy, sortOrder, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (name !== undefined) {
            queryParameters = queryParameters.set('name', name);
        }
        if (status) {
            status.forEach(element => {
                queryParameters = queryParameters.append('status', element);
            });
        }
        if (tags) {
            tags.forEach(element => {
                queryParameters = queryParameters.append('tags', element);
            });
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined) {
            queryParameters = queryParameters.set('limit', limit);
        }
        if (sortBy !== undefined) {
            queryParameters = queryParameters.set('sortBy', sortBy);
        }
        if (sortOrder !== undefined) {
            queryParameters = queryParameters.set('sortOrder', sortOrder);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/pets`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updatePet(body, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.basePath}/pets`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updatePetWithForm(petId, name, status, observe = 'body', reportProgress = false) {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updatePetWithForm.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling updatePetWithForm.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        const httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = ['application/x-www-form-urlencoded'];
        const canConsumeForm = this.canConsumeForm(consumes);
        let formParams;
        const useForm = false;
        const convertFormParamsToString = false;
        if (useForm) {
            //formParams = new FormData();
        }
        else {
            formParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        }
        if (name !== undefined) {
            formParams = formParams.append('name', name) || formParams;
        }
        if (status !== undefined) {
            formParams = formParams.append('status', status) || formParams;
        }
        return this.httpClient.post(`${this.basePath}/pets/${encodeURIComponent(String(petId))}`, convertFormParamsToString ? formParams.toString() : formParams, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
PetApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"],] }] },
    { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
PetApiService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
], PetApiService);



/***/ }),

/***/ "./src/pet-store/configuration.ts":
/*!****************************************!*\
  !*** ./src/pet-store/configuration.ts ***!
  \****************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} contentTypes - the array of content types that are available for selection
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length === 0) {
            return undefined;
        }
        const type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} accepts - the array of content types that are available for selection.
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length === 0) {
            return undefined;
        }
        const type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param {string} mime - MIME (Multipurpose Internet Mail Extensions)
     * @return {boolean} True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return (mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json'));
    }
}


/***/ }),

/***/ "./src/pet-store/encoder.ts":
/*!**********************************!*\
  !*** ./src/pet-store/encoder.ts ***!
  \**********************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

/**
 * CustomHttpUrlEncodingCodec
 * Fix plus sign (+) not encoding, so sent as blank space
 * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
 */
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"] {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}


/***/ }),

/***/ "./src/pet-store/variables.ts":
/*!************************************!*\
  !*** ./src/pet-store/variables.ts ***!
  \************************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    csv: ',',
    tsv: '   ',
    ssv: ' ',
    pipes: '|'
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\07-Developing\01-VizBox\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map