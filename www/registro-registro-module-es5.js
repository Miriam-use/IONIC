(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title text-center>Registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <img class=\"icon\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png\" alt=\"\">\n\n  <ion-item>\n      <ion-label position=\"floating\" > Nombre</ion-label>\n      <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\" > Correo electrónico</ion-label>\n  <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\" > Contraseña</ion-label>\n  <ion-input  type=\"password\" name=\"password\" [(ngModel)]=\"password\"></ion-input>\n</ion-item>\n<br>\n<ion-button color=\"primary\" expand=\"block\" (click)=\"OnSubmitRegister()\">Registrarse</ion-button>\n<br>\n<p class=\"enla\" text-center routerLink=\"/login\">Ya tengo cuenta</p>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/registro/registro-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/registro/registro-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegistroPageRoutingModule */

    /***/
    function srcAppRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
        return RegistroPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registro.page */
      "./src/app/registro/registro.page.ts");

      var routes = [{
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
      }];

      var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
        _classCallCheck(this, RegistroPageRoutingModule);
      };

      RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/registro/registro.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/registro/registro.module.ts ***!
      \*********************************************/

    /*! exports provided: RegistroPageModule */

    /***/
    function srcAppRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
        return RegistroPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registro-routing.module */
      "./src/app/registro/registro-routing.module.ts");
      /* harmony import */


      var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registro.page */
      "./src/app/registro/registro.page.ts");

      var RegistroPageModule = function RegistroPageModule() {
        _classCallCheck(this, RegistroPageModule);
      };

      RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
      })], RegistroPageModule);
      /***/
    },

    /***/
    "./src/app/registro/registro.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/registro/registro.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.enla {\n  color: dodgerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmVubGF7XHJcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/registro/registro.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/registro/registro.page.ts ***!
      \*******************************************/

    /*! exports provided: RegistroPage */

    /***/
    function srcAppRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
        return RegistroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var RegistroPage = /*#__PURE__*/function () {
        function RegistroPage(auth, router) {
          _classCallCheck(this, RegistroPage);

          this.auth = auth;
          this.router = router;
        }

        _createClass(RegistroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //***** */

        }, {
          key: "OnSubmitRegister",
          value: function OnSubmitRegister() {
            var _this = this;

            this.auth.register(this.email, this.password, this.name).then(function (auth) {
              _this.router.navigate(['/date']);

              console.log(auth);
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }]);

        return RegistroPage;
      }();

      RegistroPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registro.page.scss */
        "./src/app/registro/registro.page.scss"))["default"]]
      })], RegistroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=registro-registro-module-es5.js.map