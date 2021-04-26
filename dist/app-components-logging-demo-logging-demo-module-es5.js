function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-logging-demo-logging-demo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logging-demo/logging-demo.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logging-demo/logging-demo.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoggingDemoLoggingDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"avl-container-start\">{{ 'VizBoxStarterKit.LoggingDemo' | translate }}</h1>\r\n\r\n<avl-button (click)=\"debug()\">Debug</avl-button>\r\n<avl-button (click)=\"info()\">Info</avl-button>\r\n<avl-button (click)=\"warn()\">Warning</avl-button>\r\n<avl-button (click)=\"error()\">Error</avl-button>\r\n\r\n<div style=\"margin-top: 10px;\">\r\n  <div *ngFor=\"let log of logs$ | async\" style=\"margin-top: 5px;\">\r\n    {{log | json}}\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/components/logging-demo/logging-demo-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/logging-demo/logging-demo-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: LoggingDemoRoutingModule */

  /***/
  function srcAppComponentsLoggingDemoLoggingDemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggingDemoRoutingModule", function () {
      return LoggingDemoRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _logging_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./logging-demo.component */
    "./src/app/components/logging-demo/logging-demo.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var aboutRoutes = [{
      path: '',
      component: _logging_demo_component__WEBPACK_IMPORTED_MODULE_2__["LoggingDemoComponent"]
    }];

    var LoggingDemoRoutingModule = function LoggingDemoRoutingModule() {
      _classCallCheck(this, LoggingDemoRoutingModule);
    };

    LoggingDemoRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(aboutRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], LoggingDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/logging-demo/logging-demo.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/logging-demo/logging-demo.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoggingDemoLoggingDemoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nZ2luZy1kZW1vL2xvZ2dpbmctZGVtby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/logging-demo/logging-demo.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/logging-demo/logging-demo.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LoggingDemoComponent */

  /***/
  function srcAppComponentsLoggingDemoLoggingDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggingDemoComponent", function () {
      return LoggingDemoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @avl-services/ng-services */
    "./node_modules/@avl-services/ng-services/__ivy_ngcc__/fesm2015/avl-services-ng-services.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoggingDemoComponent = /*#__PURE__*/function () {
      function LoggingDemoComponent(loggingService) {
        _classCallCheck(this, LoggingDemoComponent);

        this.loggingService = loggingService;
        this.logs$ = this.loggingService.getLogs$();
      }

      _createClass(LoggingDemoComponent, [{
        key: "debug",
        value: function debug() {
          this.loggingService.debug('Debug Message', this.constructor.name);
        }
      }, {
        key: "info",
        value: function info() {
          this.loggingService.info('Info Message', this.constructor.name);
        }
      }, {
        key: "warn",
        value: function warn() {
          this.loggingService.warn('Warning Message', this.constructor.name);
        }
      }, {
        key: "error",
        value: function error() {
          this.loggingService.error('Error Message', this.constructor.name);
        }
      }, {
        key: "fatal",
        value: function fatal() {
          this.loggingService.fatal('Fatal Message', this.constructor.name);
        }
      }]);

      return LoggingDemoComponent;
    }();

    LoggingDemoComponent.ctorParameters = function () {
      return [{
        type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["LoggingService"]
      }];
    };

    LoggingDemoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'viz-logging-demo',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./logging-demo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logging-demo/logging-demo.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./logging-demo.component.css */
      "./src/app/components/logging-demo/logging-demo.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["LoggingService"]])], LoggingDemoComponent);
    /***/
  },

  /***/
  "./src/app/components/logging-demo/logging-demo.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/logging-demo/logging-demo.module.ts ***!
    \****************************************************************/

  /*! exports provided: LoggingDemoModule */

  /***/
  function srcAppComponentsLoggingDemoLoggingDemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggingDemoModule", function () {
      return LoggingDemoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _logging_demo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./logging-demo-routing.module */
    "./src/app/components/logging-demo/logging-demo-routing.module.ts");
    /* harmony import */


    var _logging_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logging-demo.component */
    "./src/app/components/logging-demo/logging-demo.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var LoggingDemoModule = function LoggingDemoModule() {
      _classCallCheck(this, LoggingDemoModule);
    };

    LoggingDemoModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _logging_demo_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoggingDemoRoutingModule"]],
      declarations: [_logging_demo_component__WEBPACK_IMPORTED_MODULE_3__["LoggingDemoComponent"]],
      exports: [_logging_demo_component__WEBPACK_IMPORTED_MODULE_3__["LoggingDemoComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], LoggingDemoModule);
    /***/
  }
}]);
//# sourceMappingURL=app-components-logging-demo-logging-demo-module-es5.js.map