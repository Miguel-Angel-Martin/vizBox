function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"avl-container-start\">{{ 'VizBoxStarterKit.TheFatClients' | translate }}</h1>\r\n<p>{{ 'VizBoxStarterKit.VizBoxPlatformAndAVLWebStarterKitDevelopedBy' | translate }}</p>\r\n<div *ngIf=\"isChild\" >This button demonstrates child to shell communication. The new item in shell's overflow menu is added on click.</div>\r\n<avl-button \r\n  *ngIf=\"isChild\" \r\n  (click)=\"buttonClicked()\">\r\n  Add item\r\n</avl-button>";
    /***/
  },

  /***/
  "./src/app/components/about/about-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/about/about-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: AboutRoutingModule */

  /***/
  function srcAppComponentsAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
      return AboutRoutingModule;
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


    var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/components/about/about.component.ts");

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
      component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }];

    var AboutRoutingModule = function AboutRoutingModule() {
      _classCallCheck(this, AboutRoutingModule);
    };

    AboutRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(aboutRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], AboutRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "avl-card{\r\n    display: block;\r\n  }\r\n  .card{\r\n    margin:24px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXZsLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmNhcmR7XHJcbiAgICBtYXJnaW46MjRweDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
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

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(shellCommunicationService) {
        _classCallCheck(this, AboutComponent);

        this.shellCommunicationService = shellCommunicationService;

        if (window.location !== window.parent.location) {
          this.isChild = true;
        }
      }

      _createClass(AboutComponent, [{
        key: "buttonClicked",
        value: function buttonClicked() {
          if (this.isChild) {
            this.shellCommunicationService.notifyShellAboutAction('addMenuItem');
          }
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["ShellCommunicationService"]
      }];
    };

    AboutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'viz-about',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_avl_services_ng_services__WEBPACK_IMPORTED_MODULE_1__["ShellCommunicationService"]])], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/about/about.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/about/about.module.ts ***!
    \**************************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppComponentsAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
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


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/components/about/about-routing.module.ts");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/components/about/about.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"]],
      declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
      exports: [_about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AboutModule);
    /***/
  }
}]);
//# sourceMappingURL=app-components-about-about-module-es5.js.map